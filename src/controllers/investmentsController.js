const { buyService, sellService } = require('../services');

const buyAsset = async (req, res) => {
    await buyService.buyAssetServ(req.body);

    return res.status(201).json({ message: 'compra realizada com sucesso!' });
};

const sellAsset = async (req, res) => {
    await sellService.sellAssetServ(req.body);

    return res.status(201).json({ message: 'venda realizada com sucesso!' });
};

module.exports = { buyAsset, sellAsset };
