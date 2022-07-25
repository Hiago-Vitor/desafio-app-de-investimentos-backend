const Joi = require('joi');

const validateLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = (req, res, next) => {
  const { error } = validateLogin.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};
