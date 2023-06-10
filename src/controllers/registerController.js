const { registerService } = require('../services');

const clientRegister = async (req, res) => {
    await registerService.clientRegister(req.body);
    
    return res.status(201).json('Usuario adicionado com sucesso!!!'); 
};

module.exports = { clientRegister };