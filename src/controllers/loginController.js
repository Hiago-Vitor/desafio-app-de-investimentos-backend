const { loginService } = require('../services');

const authClient = async (req, res) => {
    const token = await loginService.authClient(req.body);

    return res.status(200).json(token);
};

module.exports = { authClient };