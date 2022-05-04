import * as mongoose from 'mongoose';
import { USER_TBLE } from '../../../common/constrain';

export const providercaseSchema = new mongoose.Schema(
  {
    provider_id: { type: mongoose.Schema.Types.ObjectId, ref: USER_TBLE },
    moneycase: { type: Number },
  },
  { timestamps: true },
);
