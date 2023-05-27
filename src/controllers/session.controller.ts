import { createSession, createAccessToken } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { Request, Response } from 'express';

export async function createSessionHandler(req: Request, res: Response) {
  // Validate the user email and Password
  let user = await validatePassword(req.body);
  if (!user) {
    return res.status(401).send('Invalid username or password');
  }

  // Create a session
  const session = createSession(user._id, req.get('user-agent') || '');
  const accessToken = createAccessToken({ user, session });

  return res.send({ accessToken });
}
