const errorMiddleware = require('./errorMdwr');
const validateLogin = require('./validateLogin');
const validateToken = require('./validateToken');
const validateInvestiment = require('./validateInvestment');

module.exports = {
    errorMiddleware, validateLogin, validateToken, validateInvestiment,
};
