const express = require('express');
const { buyAsset, sellAsset } = require('../controllers/investmentsController');
const { validateToken, validateInvestiment } = require('../middlewares');

const routes = express.Router();

routes.post('/investiments/buy', validateToken, validateInvestiment, buyAsset);

routes.post('/investiments/sell', validateToken, validateInvestiment, sellAsset);

module.exports = routes;