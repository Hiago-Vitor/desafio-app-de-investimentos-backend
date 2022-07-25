require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
};

const createToken = ({ idClient, name, email }) => (
    jwt.sign({ idClient, name, email }, JWT_SECRET, jwtConfig)
);

const authToken = (token) => {
    try {
        const validate = jwt.verify(token, JWT_SECRET);
        return validate;
    } catch (err) {
        return false;
    }
};

module.exports = {
    createToken,
    authToken,
};
