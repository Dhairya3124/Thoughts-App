import { login, register } from '../types';
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user.model';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import * as config from '../../auth.config';

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await register.validateAsync(req.body);
    const user = new User(result);
    await user.save();
    res.json({ message: 'User created' });
  } catch (err) {
    next(err);
  }
};

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await login.validateAsync(req.body);
    const user = await User.findOne({ username: result.username });
    if (!user) throw new Error('User not found');
    const valid = await compare(result.password, user.password || '');
    if (!valid) throw new Error('Incorrect password');
    const token = sign({ id: user._id }, config.config.JWT_SECRET, {
      expiresIn: '1d'
    });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    next(err);
  }
};
