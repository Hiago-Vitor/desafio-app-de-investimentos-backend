const { assetsService: { getById, getByClient } } = require('../services');

const getAssetById = async (req, res) => {
    const asset = await getById(req.params);

    return res.status(200).json(asset);
};

const getAssetByClient = async (req, res) => {
    const asset = await getByClient(req.params);

    return res.status(200).json(asset);
};

module.exports = { getAssetById, getAssetByClient };