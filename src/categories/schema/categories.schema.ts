import * as mongoose from 'mongoose';

export const CategoriesSchema = new mongoose.Schema(
  {
    categoryName: { type: String },
    appcommission: { type: Number },
  },
  { timestamps: true },
);
