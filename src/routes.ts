import { Express, Request, Response } from 'express';
import validate from './middleware/validateRequest';
import { createUserHandler } from './controllers/user.contoller';
import { createUserSchema } from './schema/user.schema';


export default function (app: Express) {
  app.get('/appcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post('/api/users', validate(createUserSchema), createUserHandler);
  /*
  Example of a route that requires authentication
  {
    'username': 'admin',
    'password': 'admin',
    'email': 'admin@admin.com',
    'passwordConfirmation': 'admin'
  }
  
  
  */




}