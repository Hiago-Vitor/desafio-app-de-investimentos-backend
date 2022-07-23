const { buyService: { buyAssetServ }, sellService: { sellAssetServ } } = require('../services');

const buyAsset = async (req, res) => {
    await buyAssetServ(req.body);

    return res.status(201).json({ message: 'compra realizada com sucesso!' });
};

const sellAsset = async (req, res) => {
    await sellAssetServ(req.body);

    return res.status(201).json({ message: 'venda realizada com sucesso!' });
};

module.exports = { buyAsset, sellAsset };
