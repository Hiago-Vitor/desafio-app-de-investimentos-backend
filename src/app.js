const express = require('express');
const { errorMiddleware } = require('./middlewares')
const { loginRoute } = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use(errorMiddleware);

module.exports = app;