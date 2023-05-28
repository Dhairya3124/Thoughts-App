import * as mongoose from 'mongoose';
import { UserDocument } from './user.model';
import { ThoughtDocument } from './thoughts.model';

export interface ReplyDocument extends mongoose.Document {
  reply: string;
  isAnonymous: boolean;
  createdAt: Date;
  updatedAt: Date;
  thoughtId: ThoughtDocument['_id'];
  user: UserDocument['_id'];
}

const ReplySchema = new mongoose.Schema(
  {
    reply: {
      type: String,
      required: true
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    thoughtId: { type: mongoose.Schema.Types.ObjectId,required: true, ref: 'Thought' },
    isAnonymous: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);

const Reply = mongoose.model<ReplyDocument>('Reply', ReplySchema);
export default Reply;