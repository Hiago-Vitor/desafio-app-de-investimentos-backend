const express = require('express');
const { buyAsset, sellAsset } = require('../controllers/investmentsController');
const { validateToken, validateInvestiment } = require('../middlewares');

const routes = express.Router();

routes.post('/buy', validateToken, validateInvestiment, buyAsset);

routes.post('/sell', validateToken, validateInvestiment, sellAsset);

module.exports = routes;