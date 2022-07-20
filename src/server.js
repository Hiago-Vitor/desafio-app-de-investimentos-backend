require('dotenv').config();
const app = require('./app');

const { API_PORT } = process.env;
app.listen(API_PORT, () => {
  console.log(`Escutando a porta: ${API_PORT}`);
});
