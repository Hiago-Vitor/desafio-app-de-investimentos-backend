const errorMiddleware = require('./errorMdwr');
const validateLogin = require('./validateLogin');
const validateRegister = require('./validateRegister');
const validateToken = require('./validateToken');
const validateInvestiment = require('./validateInvestment');
const validateAccount = require('./validateAccount');

module.exports = {
    errorMiddleware,
    validateLogin,
    validateRegister,
    validateToken,
    validateInvestiment,
    validateAccount,
};
