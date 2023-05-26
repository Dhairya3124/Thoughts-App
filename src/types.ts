import Joi from 'joi';
export const login = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(8).required()
});

export const register = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required()
});