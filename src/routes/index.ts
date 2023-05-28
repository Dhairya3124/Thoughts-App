import { Express } from 'express';
import UserRoutes from './user.routes';
import ThoughtsRoutes from './thoughts.routes';
import ReplyRoutes from './reply.routes';
export default function (app: Express) {
  // Added Registration Routes and Login Routes
  app.use(UserRoutes);

  // Adding Thoughts Routes - Create Thoughts
  app.use(ThoughtsRoutes);

  // Adding Replies Routes - Create Replies on thoughts
  app.use(ReplyRoutes);
}
