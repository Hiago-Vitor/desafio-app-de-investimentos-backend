const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { SoldAsset, Asset, Client } = require('../database/models');

const sequelize = new Sequelize(config.development);

const validateSell = (soldAsset, client, payment, qtdOnSale) => {
    if (!client || !soldAsset) {
        throw {
            status: 401, message: 'cliente ou ativo inválido',
        };
    }
    if (soldAsset.dataValues.qtdPurchased < qtdOnSale) {
        throw {
            status: 400, message: 'quantia de ativos solicitada é maior que o disponivel',
        };
    }
    return true;
};

const sellTransaction = async ({ codClient, codAsset, soldAssetQtd, newBalance, assetQtd }) => {
    const response = await sequelize.transaction(async (t) => {
        await SoldAsset.update({
            qtdPurchased: soldAssetQtd,
        }, { where: { codAsset, codClient } }, { transaction: t });
        await Client.update(
            { balance: newBalance }, { where: { idClient: codClient } }, { transaction: t },
        );
        await Asset.update(
            { quantity: assetQtd }, { where: { idAsset: codAsset } }, { transaction: t },
            );
        });
    return response;
};

const sellAssetServ = async ({ codClient, codAsset, qtdAsset: qtdOnSale }) => {
    const soldAsset = await SoldAsset.findOne({ where: { codAsset, codClient } });
    const client = await Client.findByPk(codClient);
    const asset = await Asset.findByPk(codAsset);
    validateSell(soldAsset, client, qtdOnSale);
    const payment = asset.dataValues.price * qtdOnSale;
    const assetQtd = asset.dataValues.quantity + qtdOnSale;
    const newBalance = client.dataValues.balance + payment;
    const soldAssetQtd = soldAsset.dataValues.qtdPurchased - qtdOnSale;
    await sellTransaction({ codClient, codAsset, soldAssetQtd, newBalance, assetQtd });

    return true;
};

module.exports = { sellAssetServ };
