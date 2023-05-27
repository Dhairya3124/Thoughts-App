import { FilterQuery } from 'mongoose';
import Thought, { ThoughtDocument } from '../models/thoughts.model';

export async function createThoughts(input: ThoughtDocument) {
  try {
    return await Thought.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getThoughts(query: FilterQuery<ThoughtDocument>) {
  // limit and offset are optional
  const limit = query.limit && parseInt(query.limit);
  const offset = query.offset && parseInt(query.offset);
  return Thought.find().skip(offset).limit(limit).lean();
}

export async function deleteThoughts(query: FilterQuery<ThoughtDocument>) {
  // Delete thought by thought id
  const id = query.id;
  return Thought.findByIdAndDelete(id).lean();
}
