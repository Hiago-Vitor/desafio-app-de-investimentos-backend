const express = require('express');
const { getAssetById, getAssetByClient } = require('../controllers/assetsController');

const routes = express.Router();

routes.get('/:id', getAssetById);

routes.get('/client/:id', getAssetByClient);

module.exports = routes;