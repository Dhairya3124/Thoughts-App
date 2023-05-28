import { Router } from 'express';
import { createUserHandler } from '../controllers/user.contoller';
import validateRequest from '../middleware/validateRequest';
import { createUserSchema } from '../schema/user.schema';
import { createSessionHandler } from '../controllers/session.controller';

const router = Router();

// Added Registration Routes
router.post(
  '/api/register',
  validateRequest(createUserSchema),
  createUserHandler
);
router.post(
  '/api/login',
  validateRequest(createUserSchema),
  createSessionHandler
);

export default router;
