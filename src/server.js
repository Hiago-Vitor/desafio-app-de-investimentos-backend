require('dotenv').config();
const app = require('./app');

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Escutando a porta: ${PORT}`);
});
