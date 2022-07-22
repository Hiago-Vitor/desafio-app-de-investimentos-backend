const { SoldAsset, Asset, Client } = require('../database/models');

const validateBuy = (asset, client, cust, qtdRequired) => {
    if (!client || !asset) {
        throw {
            status: 401, message: 'cliente ou ativo inválido',
        };
    }
    if (cust > client.dataValues.balance) {
        throw {
            status: 401, message: 'saldo indisponivel para compra',
        };
    }
    if (asset.dataValues.quantity < qtdRequired) {
        throw {
            status: 400, message: 'quantia de ativos solicitada é maior que o disponivel',
        };
    }
    return true;
};

const buyExistingAsset = async ({ codClient, codAsset, soldAssetQtd, rebate, assetQtd }) => {
    const response = await sequelize.transaction(async (t) => {
        await SoldAsset.update({
            qtdPurchased: soldAssetQtd,
        }, { where: { codAsset, codClient } }, { transaction: t });
        await Client.update(
            { balance: rebate }, { where: { idClient: codClient } }, { transaction: t },
        );
        await Asset.update(
            { quantity: assetQtd }, { where: { idAsset: codAsset } }, { transaction: t },
            );
        });
    return response;
};

const buyNewAsset = async ({ codClient, codAsset, rebate, assetQtd, qtdPurchased }) => {
    const response = await sequelize.transaction(async (t) => {
        await SoldAsset.create(
            { codAsset, codClient, qtdPurchased },
            { where: { codAsset, codClient } }, { transaction: t },
            );
        await Client.update(
            { balance: rebate }, { where: { idClient: codClient } }, { transaction: t },
        );
        await Asset.update(
            { quantity: assetQtd }, { where: { idAsset: codAsset } }, { transaction: t },
            );
        });

    return response;
};

const buyAssetServ = async ({ codClient, codAsset, qtdAsset: qtdPurchased }) => {
    const client = await Client.findByPk(codClient);
    const asset = await Asset.findByPk(codAsset);
    const { dataValues } = await SoldAsset.findOne({ where: { codAsset, codClient } });
    const soldAssetQtd = dataValues.qtdPurchased + qtdPurchased;
    const assetQtd = asset.dataValues.quantity - qtdPurchased;
    const cust = asset.dataValues.price * qtdPurchased;
    const rebate = client.dataValues.balance - cust;
    validateBuy(asset, client, cust, qtdPurchased);
    if (dataValues) {
        await buyExistingAsset({ codClient, codAsset, soldAssetQtd, rebate, assetQtd });
        return 'existing';
    } 
    return true;
};

module.exports = { buyAssetServ };
