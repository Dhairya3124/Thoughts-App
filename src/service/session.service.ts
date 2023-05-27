import Session, { SessionDocument } from '../models/session.model';
import { UserDocument } from '../models/user.model';
import { sign } from '../utils/jwt.utils';
import config from '../../config/default';

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({ user: userId, userAgent });
  return session.toJSON();
}

export function createAccessToken({
  user,
  session
}: {
  user: Omit<UserDocument, 'password'>;
  session: SessionDocument['_id'];
}) {
  const accessToken = sign(
    { ...user, session },
    { expiresIn: config.accesstokenTtl }
  );
  return accessToken;
}
