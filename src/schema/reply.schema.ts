import Joi from 'joi';

export const createReplySchema = Joi.object({
  body: Joi.object({
    text: Joi.string().required().error(new Error('Reply is required')),
    isAnonymous: Joi.boolean().required(),
    thoughtId: Joi.string()
      .required()
      .error(new Error('ThoughtId is required')),
    user: Joi.string().required().error(new Error('User is required'))
  })
});

export const getReplySchema = Joi.object({
  body: Joi.object({
    limit: Joi.number().optional(),
    offset: Joi.number().optional(),
    thoughtId: Joi.string()
      .required()
      .error(new Error('ThoughtId is required'))
  })
});

export const deleteReplySchema = Joi.object({
  body: Joi.object({
    thoughtid: Joi.string().required().error(new Error('thoughtid is required')),
    id: Joi.string().required().error(new Error('id is required'))
  })
});