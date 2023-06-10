const express = require('express');
const { clientRegister } = require('../controllers/registerController');
const { validateRegister } = require('../middlewares');

const routes = express.Router();

routes.post('/register', validateRegister, clientRegister);

module.exports = routes;