require('dotenv').config();
const app = require('./app');

const { API_PORT } = process.env || 3000;
app.listen(API_PORT, () => {
  console.log(`Escutando a porta: ${API_PORT}`);
});
