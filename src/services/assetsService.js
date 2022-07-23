const { Asset, SoldAsset } = require('../database/models');

const getById = async ({ id }) => {
    const { dataValues } = await Asset.findByPk(id);
    
    if (!dataValues) return false;

    const asset = {
        codAsset: dataValues.idAsset,
        qtdAsset: dataValues.quantity,
        value: dataValues.price,
    };

    return asset;
};

const getByClient = async ({ id }) => {
    const clientAsset = await SoldAsset.findAll({
        where: { codClient: id },
        include: { model: Asset, as: 'assets', attributes: ['price'] },
    });
    
    if (!clientAsset) return false;
    
    const response = clientAsset.map((item) => ({
        codAsset: item.codAsset,
        codClient: item.codClient,
        qtdPurchased: item.qtdPurchased,
        value: item.assets.price,
    }));

    return response;
};

module.exports = { getById, getByClient };