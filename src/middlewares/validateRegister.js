const Joi = require('joi');

const validateRegister = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

module.exports = (req, res, next) => {
    const { error } = validateRegister.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};