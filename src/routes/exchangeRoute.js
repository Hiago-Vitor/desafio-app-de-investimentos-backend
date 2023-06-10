const express = require('express');
const { getAllAssets } = require('../controllers/exchangeController');
const { getAssetById } = require('../controllers/assetsController');

const routes = express.Router();

routes.get('/exchange', getAllAssets);

routes.get('/exchange/asset/:id', getAssetById);

module.exports = routes;