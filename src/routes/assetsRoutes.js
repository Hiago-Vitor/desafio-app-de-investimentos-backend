const express = require('express');
const { getAssetById, getAssetByClient } = require('../controllers/assetsController');
const { validateToken } = require('../middlewares');

const routes = express.Router();

routes.get('/client', validateToken, getAssetByClient);

routes.get('/:id', getAssetById);

module.exports = routes;