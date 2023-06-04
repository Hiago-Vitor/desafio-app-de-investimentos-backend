const { exchangeService } = require('../services');

const getAllAssets = async (req, res) => {
    const assets = await exchangeService.getAll();
    
    return res.status(200).json(assets);
};
module.exports = { getAllAssets };
