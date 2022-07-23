const { Asset, SoldAsset } = require('../database/models');

const getById = async ({ id }) => {
    const { dataValues } = await Asset.findByPk(id);
    if (!dataValues) throw { status: 404, message: 'ativo inexistente' };

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

    if (!clientAsset) throw { status: 404, message: 'o cliente não possui ativos' };
    const response = clientAsset.map((item) => ({
        codAsset: item.codAsset,
        codClient: item.codClient,
        qtdPurchased: item.qtdPurchased,
        value: item.assets.price,
    }));

    return response;
};

module.exports = { getById, getByClient };