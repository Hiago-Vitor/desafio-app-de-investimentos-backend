const bcrypt = require('bcrypt');
const { Client } = require('../database/models');
const { createToken } = require('../utils/jwt');

const authClient = async ({ email, password }) => {
  const clientData = await Client.findOne({ where: { email } });

  if (!clientData) return false;

  const isMatch = bcrypt.compareSync(password, clientData.dataValues.password);

  if (!isMatch) return false;
  
  const token = createToken(clientData.dataValues);

  return { token };
};

module.exports = { authClient };
