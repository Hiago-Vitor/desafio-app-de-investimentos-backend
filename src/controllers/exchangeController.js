const { exchangeService: { getAll } } = require('../services');

const getAllAssets = async (_req, _res) => {
    const assets = await getAll();
    
    return assets;
};
module.exports = { getAllAssets };
