const express = require('express');
const { clientRegister } = require('../controllers/registerController');

const routes = express.Router();

routes.post('/register', clientRegister);

module.exports = routes;