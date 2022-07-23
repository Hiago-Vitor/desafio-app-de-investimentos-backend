const { Client } = require('../database/models');
const { createToken } = require('../utils/jwt');

const authClient = async ({ email, password }) => {
  const clientData = await Client.findOne({ where: { email, password } });

  if (!clientData) return false;
  
  const token = createToken(clientData.dataValues);

  return { token };
};

module.exports = { authClient };
