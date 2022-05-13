import * as mongoose from 'mongoose';
import { SERVICE_PROVIDER, USER_TBLE } from '../../common/constrain';

export const ServiceProcessSchema = new mongoose.Schema({
  serviceprovider_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: SERVICE_PROVIDER,
  },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: USER_TBLE },
  userRating: { type: Number, default: 0 },
  userComment: { type: String },
  status: { type: Boolean, default: false },
});
