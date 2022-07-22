const express = require('express');
const { buyAsset } = require('../controllers/investmentController');
const { validateToken, validateInvestiment } = require('../middlewares');

const routes = express.Router();

routes.post('/buy', validateToken, validateInvestiment, buyAsset);

module.exports = routes;