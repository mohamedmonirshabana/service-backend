import * as mongoose from 'mongoose';

export const appinfoschema = new mongoose.Schema({
  app_money: { type: Number, default: 0 },
  app_tax: { type: Number, default: 0.1 },
});
