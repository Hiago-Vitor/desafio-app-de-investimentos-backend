const { authToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    
    const result = authorization.split(' ');
    console.log(result);
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    
    const tokenToVerify = result.length > 1 ? result[1] : result[0];
    const validate = authToken(tokenToVerify);
  
    if (!validate) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = validate;
    next();
  };