import { Filter } from 'mongodb';
import Reply, { ReplyDocument } from './../models/reply.model';
import { FilterQuery } from 'mongoose';

export async function createReply(input: ReplyDocument) {
  try {
    return await Reply.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getReply(query: FilterQuery<ReplyDocument>) {
  // limit and offset are optional
  const limit = query.limit && parseInt(query.limit);
  const offset = query.offset && parseInt(query.offset);
  return Reply.find().skip(offset).limit(limit).lean();
}

export async function deleteReply(query: FilterQuery<ReplyDocument>) {
  // Delete reply by reply id
  const id = query.id;
  return Reply.findByIdAndDelete(id).lean();
}

