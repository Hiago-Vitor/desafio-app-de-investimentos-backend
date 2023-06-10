const bcrypt = require('bcrypt');
const { Client } = require('../database/models');

const clientRegister = async ({ name, email, password }) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    
    await Client.create({ name, email, password: hashedPassword });
};

module.exports = { clientRegister };