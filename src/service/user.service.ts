import { FilterQuery } from 'mongoose';
import { User, UserDocument } from '../models/user.model';
import { omit } from 'lodash';

export async function createUser(input: UserDocument) {
  try {
    return await User.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function validatePassword({
  username,
  password
}: {
  username: UserDocument['username'];
  password: string;
}) {
  const user = await User.findOne({ username });
  if (!user) return false;
  const isValid = await user.comparePassword(password);
  if (!isValid) return false;
  return omit(user.toJSON(), 'password');
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return User.findOne(query).lean();
}