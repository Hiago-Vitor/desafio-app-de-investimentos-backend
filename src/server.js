require('dotenv').config();
const app = require('./app');

 const { PORT, NODE_ENV } = process.env;
app.listen(PORT, () => {
  console.log(`Escutando a porta: ${PORT} \n Ambiente: ${NODE_ENV}`);
});