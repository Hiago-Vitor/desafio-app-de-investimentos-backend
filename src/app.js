const express = require('express');
require('express-async-errors');
const { errorMiddleware } = require('./middlewares');
const { loginRoute, investimentRoute } = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/investiments', investimentRoute);

app.use(errorMiddleware);

module.exports = app;