const Joi = require('joi');

const validateData = Joi.object({
    codClient: Joi.number().min(1).required(),
    value: Joi.number().min(1).required(),
});

module.exports = (req, res, next) => {
    const { error } = validateData.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
};