const { accountService } = require('../services');

const newDeposit = async (req, res) => {
    const response = await accountService.deposit(req.user, req.body);

    if (!response) return res.status(401).json({ message: 'cliente não existe na base de dados' });

    return res.status(201).json({ message: 'depósito realizado com sucesso' });
};

const newWithdraw = async (req, res) => {
    const response = await accountService.withdraw(req.user, req.body);

    if (!response) return res.status(401).json({ message: 'cliente não existe na base de dados' });

    return res.status(201).json({ message: 'saque realizado com sucesso' });
};

const getBalance = async (req, res) => {
    const clientBalance = await accountService.balance(req.user);

    if (!clientBalance) {
        return res.status(401).json(
            { message: 'cliente não existe na base de dados' },
        );
    }

    return res.status(200).json(clientBalance);
};

module.exports = { newDeposit, newWithdraw, getBalance };