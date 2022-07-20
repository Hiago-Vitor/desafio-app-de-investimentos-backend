const { loginService } = require('../services');

const authClient = async (req, res) => {
    const token = await loginService.authClient(req.body);

    if (!token) return res.status(400).json({ message: 'Invalid fields' });

    return res.status(200).json(token);
};

module.exports = { authClient };