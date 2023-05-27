import Joi from 'joi';

export const createThoughtSchema = Joi.object({
  body: Joi.object({
    text: Joi.string().required().error(new Error('Thought is required')),
    isAnonymous: Joi.boolean()
      .required()
      .error(new Error('isAnonymous is required'))
  })
});

export const getThoughtSchema = Joi.object({
  body: Joi.object({
    limit: Joi.number().optional(),
    offset: Joi.number().optional()
  })
});

export const deleteThoughtSchema = Joi.object({
  body: Joi.object({
    id: Joi.string().required().error(new Error('id is required'))
  })
});
