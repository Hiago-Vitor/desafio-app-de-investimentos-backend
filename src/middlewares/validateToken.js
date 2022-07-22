const { authToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const validate = authToken(authorization);
  
    if (!validate) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = validate;
    next();
  };