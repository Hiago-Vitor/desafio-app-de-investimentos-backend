const { assetsService } = require('../services');

const getAssetById = async (req, res) => {
    const asset = await assetsService.getById(req.params);

    if (!asset) return res.status(404).json({ message: 'ativo inexistente' });

    return res.status(200).json(asset);
};

const getAssetByClient = async (req, res) => {
    const asset = await assetsService.getByClient(req.params);

    if (!asset) return res.status(404).json({ message: 'ativo inexistente' });

    return res.status(200).json(asset);
};

module.exports = { getAssetById, getAssetByClient };