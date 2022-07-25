const express = require('express');
const { getAssetById, getAssetByClient } = require('../controllers/assetsController');
const { validateToken } = require('../middlewares');

const routes = express.Router();

routes.get('/assets/client', validateToken, getAssetByClient);

routes.get('/assets/:id', getAssetById);

module.exports = routes;