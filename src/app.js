const express = require('express');
require('express-async-errors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const { errorMiddleware } = require('./middlewares');
const accountRoute = require('./routes/accountRoutes');
const assetsRoutes = require('./routes/assetsRoutes');
const exchangeRoute = require('./routes/exchangeRoute');
const investmentsRoute = require('./routes/investmentsRoutes');
const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');
    
    const app = express();
    
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use(accountRoute, assetsRoutes, exchangeRoute, investmentsRoute, loginRoute, registerRoute);

app.use(errorMiddleware);

module.exports = app;