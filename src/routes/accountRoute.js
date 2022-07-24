const express = require('express');
const { newDeposit, newWithdraw, getBalance } = require('../controllers/accountController');
const { validateAccount, validateToken } = require('../middlewares');

const routes = express.Router();

routes.put('/deposit', validateAccount, validateToken, newDeposit);

routes.put('/withdraw', validateAccount, validateToken, newWithdraw);

routes.get('/', validateToken, getBalance);

module.exports = routes;