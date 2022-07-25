const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = [
        './src/routes/loginRoute.js', './src/routes/accountRoutes.js',
        './src/routes/investmentsRoutes.js', './src/routes/assetsRoutes.js',
        './src/routes/exchangeRoute.js'];

swaggerAutogen(outputFile, endpointsFiles);