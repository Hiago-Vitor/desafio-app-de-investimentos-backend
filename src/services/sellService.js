const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { SoldAsset, Asset, Client } = require('../database/models');

const sequelize = new Sequelize(config.development);

const validateSell = (foundSoldAsset, foundClient, payment, qtdOnSale) => {
    if (!foundClient || !foundSoldAsset) {
        throw {
            status: 401, message: 'cliente ou ativo inválido',
        };
    }
    if (foundSoldAsset.dataValues.qtdPurchased < qtdOnSale) {
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

const sellAssetServ = async ({ idClient: codClient }, { codAsset, qtdAsset: qtdOnSale }) => {
    const foundSoldAsset = await SoldAsset.findOne({ where: { codAsset, codClient } });
    const foundClient = await Client.findByPk(codClient);
    const foundAsset = await Asset.findByPk(codAsset);

    validateSell(foundSoldAsset, foundClient, qtdOnSale);

    const payment = foundAsset.dataValues.price * qtdOnSale;
    const assetQtd = foundAsset.dataValues.quantity + qtdOnSale;
    const newBalance = foundClient.dataValues.balance + payment;
    const soldAssetQtd = foundSoldAsset.dataValues.qtdPurchased - qtdOnSale;
    
    await sellTransaction({ codClient, codAsset, soldAssetQtd, newBalance, assetQtd });

    return true;
};

module.exports = { sellAssetServ };
