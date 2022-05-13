import { IsEmail, IsMongoId, IsPhoneNumber, IsString } from 'class-validator';

export class AccountAdd {
  @IsMongoId()
  _id: string;
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
