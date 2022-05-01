import * as mongoose from 'mongoose';
import { CATEGORY_TBLE } from '../../../common/constrain';

export const ServiceSchema = new mongoose.Schema(
  {
    category_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: CATEGORY_TBLE,
      required: true,
    },
    title: { type: String },
    description: { type: String },
  },
  { timestamps: true },
);
