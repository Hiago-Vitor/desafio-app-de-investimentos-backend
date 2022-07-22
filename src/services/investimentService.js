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

const buyAssetServ = async ({ codClient, codAsset, qtdAsset: qtdPurchased }) => {
    const client = await Client.findByPk(codClient);
    const asset = await Asset.findByPk(codAsset);
    const { dataValues } = await SoldAsset.findOne({ where: { codAsset, codClient } });
    const soldAssetQtd = dataValues.qtdPurchased + qtdPurchased;
    const assetQtd = asset.dataValues.quantity - qtdPurchased;
    const cust = asset.dataValues.price * qtdPurchased;
    const rebate = client.dataValues.balance - cust;
    validateBuy(asset, client, cust, qtdPurchased);
    return true;
};

module.exports = { buyAssetServ };
