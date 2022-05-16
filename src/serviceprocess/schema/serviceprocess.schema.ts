import * as mongoose from 'mongoose';
import { SERVICE_PROVIDER, USER_TBLE } from '../../common/constrain';

export const ServiceProcessSchema = new mongoose.Schema(
  {
    serviceprovider_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: SERVICE_PROVIDER,
    },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: USER_TBLE },
    location: {
      type: {
        type: String,
        default: 'Point',
      },
      coordinates: {
        type: [Number],
      },
    },
    providerid: { type: mongoose.Schema.Types.ObjectId, ref: USER_TBLE },
    provider_price: { type: Number },
    Category_comission: { type: Number },
    App_tax: { type: Number },
    total_price: { type: Number },
    userComment: { type: String },
    userRating: { type: Number, default: 0 },
    arriveState: { type: Boolean, default: false },
    finish_Status: { type: Boolean, default: false },
    hand_payment: { type: Boolean, default: false },
  },
  { timestamps: true },
);
