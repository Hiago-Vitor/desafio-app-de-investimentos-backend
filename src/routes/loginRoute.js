const express = require('express');
const { authClient } = require('../controllers/loginController');
const { validateLogin } = require('../middlewares');

const routes = express.Router();

routes.post('/login', validateLogin, authClient);

module.exports = routes;