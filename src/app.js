const express = require('express');
const { errorMiddleware } = require('./middlewares')

const app = express();

app.use(express.json());


app.use(errorMiddleware);

module.exports = app;