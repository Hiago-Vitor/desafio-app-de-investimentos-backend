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

const getByClient = async ({ idClient }) => {
    const clientAsset = await SoldAsset.findAll({
        where: { codClient: idClient },
        include: { model: Asset, as: 'assets', attributes: ['price'] },
    });

    if (!clientAsset) return false;

    const response = clientAsset.map((item) => ({
        codAsset: item.codAsset,
        codClient: item.codClient,
        qtdPurchased: item.qtdPurchased,
        value: item.assets.price,
    }))
        .filter((it) => it.qtdPurchased > 0);

    return response;
};

module.exports = { getById, getByClient };