const express = require('express');
const { getAllAssets } = require('../controllers/exchangeController');

const routes = express.Router();

routes.get('/', getAllAssets);

module.exports = routes;