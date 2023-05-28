import { Router } from 'express';
import { createThoughtsHandler, getThoughtsHandler, deleteThoughtsHandler } from '../controllers/thoughts.controller';
import { checkauth } from '../middleware/checkauth';
import requiresUser from '../middleware/requiresUser';
import validateRequest from '../middleware/validateRequest';
import { createThoughtSchema, getThoughtSchema, deleteThoughtSchema } from '../schema/thoughts.schema';


const ThoughtsRoutes = Router();

  ThoughtsRoutes.post(
    '/api/thoughts',
    [checkauth, requiresUser, validateRequest(createThoughtSchema)],
    createThoughtsHandler
  );
  // Adding Thoughts Routes - Get all thoughts
  ThoughtsRoutes.get(
    '/api/thoughts',
    [checkauth, validateRequest(getThoughtSchema)],
    getThoughtsHandler
  );
  // Deleting the thoughts - Delete thoughts
  ThoughtsRoutes.delete(
    '/api/thoughts',
    [checkauth, validateRequest(deleteThoughtSchema)],
    deleteThoughtsHandler
  );

export default ThoughtsRoutes;