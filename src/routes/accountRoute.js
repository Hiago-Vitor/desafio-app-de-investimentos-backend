const express = require('express');
const { newDeposit, newWithdraw, getBalance } = require('../controllers/accountController');
const validateAccount = require('../middlewares/validateAccount');

const routes = express.Router();

routes.put('/deposit', validateAccount, newDeposit);

routes.put('/withdraw', validateAccount, newWithdraw);

routes.get('/:id', getBalance);

module.exports = routes;