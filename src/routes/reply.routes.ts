import { Router } from 'express';
import {
  createRepliesHandler,
  getRepliesHandler,
  deleteRepliesHandler
} from '../controllers/reply.controller';
import { checkauth } from '../middleware/checkauth';
import requiresUser from '../middleware/requiresUser';
import validateRequest from '../middleware/validateRequest';
import {
  createReplySchema,
  getReplySchema,
  deleteReplySchema
} from '../schema/reply.schema';

const ReplyRoutes = Router();

ReplyRoutes.post(
  '/api/replies',
  [checkauth, requiresUser, validateRequest(createReplySchema)],
  createRepliesHandler
);
// Adding Replies Routes - Get all replies
ReplyRoutes.get(
  '/api/replies',
  [checkauth, validateRequest(getReplySchema)],
  getRepliesHandler
);

// Deleting the replies - Delete replies
ReplyRoutes.delete(
  '/api/replies',
  [checkauth, validateRequest(deleteReplySchema)],
  deleteRepliesHandler
);

export default ReplyRoutes;
