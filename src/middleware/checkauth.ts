import jwt from 'jsonwebtoken';
import config from '../../config/default';

const privatekey = config.privatekey as string;

export function checkauth(req: any, res: any, next: any) {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const decoded = jwt.verify(token, privatekey);
    req.user = decoded;
    req.body.user = req.user._id;
    next();
  } catch (error: any) {
    return res.status(401).json({
      message: 'Auth failed'
    });
  }
}
