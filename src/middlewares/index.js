const errorMiddleware = require('./errorMdwr');
const validateLogin = require('./validateLogin');
const validateToken = require('./validateToken');
const validateInvestiment = require('./validateInvestment');
const validateAccount = require('./validateAccount');

module.exports = {
    errorMiddleware, validateLogin, validateToken, validateInvestiment, validateAccount,
};
