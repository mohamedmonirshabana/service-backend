import { Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const Account = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    role: { type: Array },
    phone: { type: String },
    profilepics: { type: String },
    location: {
      type: {
        type: String,
        default: 'Point',
      },
      coordinates: {
        type: [Number],
      },
    },
  },
  { timestamps: true },
);
