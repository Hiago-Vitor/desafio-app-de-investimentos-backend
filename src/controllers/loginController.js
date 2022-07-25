const { loginService } = require('../services');

const authClient = async (req, res) => {
    const token = await loginService.authClient(req.body);

    if (!token) return res.status(401).json({ message: 'login não autorizado' });
    
    return res.status(200).json(token);
};

module.exports = { authClient };