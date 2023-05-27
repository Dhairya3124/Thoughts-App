import Joi from 'joi';

export const createUserSchema = Joi.object({
  body: Joi.object({
    username: Joi.string().required().error(new Error('Username is required')),
    password: Joi.string().required().error(new Error('Password is required')),
    passwordConfirmation: Joi.string()
      .required()
      .valid(Joi.ref('password'))
      .error(new Error('Password must match')),
    email: Joi.string().email().required().error(new Error('Email is required'))
  })
});

export const createUserSessionSchema = Joi.object({
  body: Joi.object({
    username: Joi.string().required().error(new Error('Username is required')),
    password: Joi.string().required().error(new Error('Password is required'))
  })
});
