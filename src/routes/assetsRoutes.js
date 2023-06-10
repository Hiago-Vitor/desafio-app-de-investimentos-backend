const express = require('express');
const { getAssetByClient } = require('../controllers/assetsController');
const { validateToken } = require('../middlewares');

const routes = express.Router();

routes.get('/assets/client', validateToken, getAssetByClient);

module.exports = routes;