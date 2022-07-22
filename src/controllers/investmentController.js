const { investimentService: { buyAssetServ } } = require('../services');

const buyAsset = async (req, res) => {
    const responseData = await buyAssetServ(req.body, req.onSale);
    
    return res.status(201).json(responseData);
};

module.exports = { buyAsset };
