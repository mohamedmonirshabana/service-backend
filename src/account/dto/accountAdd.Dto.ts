import { IsEmail, IsMongoId, IsPhoneNumber, IsString } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose, SchemaType } from 'mongoose';

export class AccountAdd {
  @IsMongoId()
  id: string;
  @IsString()
  username: string;
  @IsString()
  password: string;
  @IsEmail()
  email: string;
  role: [];
  @IsString()
  phone: string;
  @IsString()
  profilepics: string;
  location: { type: string; coordinates: [] };
}
