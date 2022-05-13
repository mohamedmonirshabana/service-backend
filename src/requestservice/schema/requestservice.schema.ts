import * as mongoose from 'mongoose';
import { SERVICE_PROVIDER, USER_TBLE } from '../../common/constrain';

export const requestServiceSchema = new mongoose.Schema(
  {
    serviceProvider_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: SERVICE_PROVIDER,
      required: true,
    },
    user_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: USER_TBLE,
      required: true,
    },
    request_status: { type: Boolean, default: false },
  },
  { timestamps: true },
);
