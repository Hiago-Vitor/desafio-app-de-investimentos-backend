const { Client } = require('../database/models');

const deposit = async ({ codClient, value }) => {
    const client = await Client.findByPk(codClient);
    if (!client) return false;
    const newBalance = value + client.balance;

     await Client.update(
        { balance: newBalance }, { where: { idClient: codClient } },
    );
    return true;
};

const withdraw = async ({ codClient, value }) => {
    const client = await Client.findByPk(codClient);
    if (!client) return false;
    if (value >= client.balance) {
        throw {
            status: 400, message: 'o valor solicitado é inferior ao saldo disponivel',
        };
    }
    const newBalance = client.balance - value;
    await Client.update(
        { balance: newBalance }, { where: { idClient: codClient } },
    );
    return true;
};

const balance = async ({ id }) => {
    const client = await Client.findByPk(id, { attributes: ['idClient', 'balance'] });

    if (!client) return false;
    
    return client;
};

module.exports = { deposit, withdraw, balance };