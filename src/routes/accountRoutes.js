const express = require('express');
const { newDeposit, newWithdraw, getBalance } = require('../controllers/accountController');
const { validateAccount, validateToken } = require('../middlewares');

const routes = express.Router();

routes.put('/account/deposit', validateAccount, validateToken, newDeposit);

routes.put('/account/withdraw', validateAccount, validateToken, newWithdraw);

routes.get('/account/balance', validateToken, getBalance);

module.exports = routes;