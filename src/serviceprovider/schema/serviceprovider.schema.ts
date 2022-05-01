import * as mongoose from 'mongoose';
import { SERVICE_TBLE, USER_TBLE } from '../../../common/constrain';

export const ServiceProviderSchema = new mongoose.Schema({
  service_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: SERVICE_TBLE,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: USER_TBLE,
    required: true,
  },
  grate: { type: Number },
  serviceprice: { type: Number },
  active: { type: Boolean, default: true },
});
