const { Client } = require('../database/models');

const deposit = async ({ codClient, value }) => {
    const client = await Client.findByPk(codClient);
    const newBalance = value + client.balance;

    const response = await Client.update(
        { balance: newBalance }, { where: { idClient: codClient } },
    );
    return response;
};

const withdraw = async ({ codClient, value }) => {
    const client = await Client.findByPk(codClient);
    if (value >= client.balance) {
        throw {
            status: 400, message: 'o valor solicitado é inferior ao saldo disponivel',
        };
    }
    const newBalance = client.balance - value;
    const response = await Client.update(
        { balance: newBalance }, { where: { idClient: codClient } },
    );
    return response;
};

const balance = async ({ id }) => {
    const client = await Client.findByPk(id, { attributes: ['idClient', 'balance'] });

    return client;
};

module.exports = { deposit, withdraw, balance };