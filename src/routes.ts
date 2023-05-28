import { Express, Request, Response } from 'express';
import validateRequest from './middleware/validateRequest';
import { createUserHandler } from './controllers/user.contoller';
import { createSessionHandler } from './controllers/session.controller';
import {
  createUserSchema,
  createUserSessionSchema
} from './schema/user.schema';
import requiresUser from './middleware/requiresUser';
import { checkauth } from './middleware/checkauth';
import {
  createThoughtsHandler,
  getThoughtsHandler,
  deleteThoughtsHandler
} from './controllers/thoughts.controller';
import {
  createThoughtSchema,
  getThoughtSchema,
  deleteThoughtSchema
} from './schema/thoughts.schema';
import { createReplySchema, deleteReplySchema, getReplySchema } from './schema/reply.schema';
import { createRepliesHandler, getRepliesHandler, deleteRepliesHandler } from './controllers/reply.controller';

export default function (app: Express) {
  app.get('/appcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  });
  // Added Registration Routes
  app.post(
    '/api/register',
    validateRequest(createUserSchema),
    createUserHandler
  );
  //Added Login Routes using sessions

  app.post(
    '/api/login',
    validateRequest(createUserSessionSchema),
    createSessionHandler
  );

  // Adding Thoughts Routes - Create Thoughts
  app.post(
    '/api/addthoughts',
    [checkauth, requiresUser, validateRequest(createThoughtSchema)],
    createThoughtsHandler
  );
  // Adding Thoughts Routes - Get all thoughts
  app.get(
    '/api/getthoughts',
    [checkauth, validateRequest(getThoughtSchema)],
    getThoughtsHandler
  );
  // Deleting the thoughts - Delete thoughts
  app.delete(
    '/api/deletethoughts',
    [checkauth, validateRequest(deleteThoughtSchema)],
    deleteThoughtsHandler
  );
  // Adding Replies Routes - Create Replies
  app.post(
    '/api/addreplies',
    [checkauth, requiresUser, validateRequest(createReplySchema)],
    createRepliesHandler
  );
  // Adding Replies Routes - Get all replies
  app.get(
    '/api/getreplies',
    [checkauth, validateRequest(getReplySchema)],
    getRepliesHandler
  );

  // Deleting the replies - Delete replies
  app.delete(
    '/api/deletereplies',
    [checkauth, validateRequest(deleteReplySchema)],
    deleteRepliesHandler
  );


  
}
