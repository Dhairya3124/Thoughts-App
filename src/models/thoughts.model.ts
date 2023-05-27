import { UserDocument } from './user.model';
import * as mongoose from 'mongoose';

export interface ThoughtDocument extends mongoose.Document {
  thought: string;
  isAnonymous: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: UserDocument['_id'];
}

const ThoughtSchema = new mongoose.Schema(
  {
    thought: {
      type: String,
      required: true
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isAnonymous: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);

const Thought = mongoose.model<ThoughtDocument>('Thought', ThoughtSchema);
export default Thought;
