const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { SoldAsset, Asset, Client } = require('../database/models');

const sequelize = new Sequelize(config.development);

const validateBuy = (foundAsset, foundClient, cust, qtdRequired) => {
    if (!foundClient || !foundAsset) {
        throw {
            status: 401, message: 'cliente ou ativo inválido',
        };
    }
    if (cust > foundClient.dataValues.balance) {
        throw {
            status: 401, message: 'saldo indisponivel para compra',
        };
    }
    if (foundAsset.dataValues.quantity < qtdRequired) {
        throw {
            status: 400, message: 'quantia de ativos solicitada é maior que o disponivel',
        };
    }
    return true;
};

const buyExistingAsset = async ({ codClient, codAsset, soldAssetQtd, rebate, foundAssetQtd }) => {
    const response = await sequelize.transaction(async (t) => {
        await SoldAsset.update({
            qtdPurchased: soldAssetQtd,
        }, { where: { codAsset, codClient } }, { transaction: t });
        await Client.update(
            { balance: rebate }, { where: { idClient: codClient } }, { transaction: t },
        );
        await Asset.update(
            { quantity: foundAssetQtd }, { where: { idAsset: codAsset } }, { transaction: t },
        );
    });
    return response;
};

const buyNewAsset = async ({ codClient, codAsset, rebate, foundAssetQtd, qtdPurchased }) => {
    const response = await sequelize.transaction(async (t) => {
        await SoldAsset.create(
            { codAsset, codClient, qtdPurchased },
            { where: { codAsset, codClient } }, { transaction: t },
        );
        await Client.update(
            { balance: rebate }, { where: { idClient: codClient } }, { transaction: t },
        );
        await Asset.update(
            { quantity: foundAssetQtd }, { where: { idAsset: codAsset } }, { transaction: t },
        );
    });

    return response;
};

const buyAssetServ = async ({ idClient: codClient }, { codAsset, qtdAsset: qtdPurchased }) => {
    const foundClient = await Client.findByPk(codClient);
    const foundAsset = await Asset.findByPk(codAsset);
    const foundSoldAsset = await SoldAsset.findOne({ where: { codAsset, codClient } });

    const foundAssetQtd = foundAsset.dataValues.quantity - qtdPurchased;
    const cust = foundAsset.dataValues.price * qtdPurchased;
    const rebate = foundClient.dataValues.balance - cust;

    validateBuy(foundAsset, foundClient, cust, qtdPurchased);

    if (foundSoldAsset) {
        const soldAssetQtd = foundSoldAsset.dataValues.qtdPurchased + qtdPurchased;
        await buyExistingAsset({ codClient, codAsset, soldAssetQtd, rebate, foundAssetQtd });
        return true;
    }
    
    await buyNewAsset({ codClient, codAsset, rebate, foundAssetQtd, qtdPurchased });

    return true;
};

module.exports = { buyAssetServ };
