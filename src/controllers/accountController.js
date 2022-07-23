const { accountService: { deposit, withdraw, balance } } = require('../services');

const newDeposit = async (req, res) => {
    await deposit(req.body);

    return res.status(201).json({ message: 'depósito realizado com sucesso' });
};

const newWithdraw = async (req, res) => {
    await withdraw(req.body);

    return res.status(201).json({ message: 'saque realizado com sucesso' });
};

const getBalance = async (req, res) => {
    const clientBalance = await balance(req.params);

    return res.status(200).json(clientBalance);
};

module.exports = { newDeposit, newWithdraw, getBalance };