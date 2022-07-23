const express = require('express');
require('express-async-errors');
const { errorMiddleware } = require('./middlewares');
const {
    loginRoute, investimentsRoute, assetsRoute, accountRoute, exchangeRoute } = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/investiments', investimentsRoute);

app.use('/assets', assetsRoute);

app.use('/account', accountRoute);

app.use('/exchange', exchangeRoute);

app.use(errorMiddleware);

module.exports = app;