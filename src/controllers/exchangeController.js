const { exchangeService } = require('../services');

const getAllAssets = async (_req, res) => {
    const assets = await exchangeService.getAll();
    
    return res.status(200).json(assets);
};
module.exports = { getAllAssets };
