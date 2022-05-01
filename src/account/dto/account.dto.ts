import { IsEmail, IsMongoId, IsPhoneNumber, IsString } from 'class-validator';

export class AccountDto {
  @IsMongoId()
  _id: string;
  @IsString()
  username: string;
  @IsString()
  password: string;
  @IsString()
  @IsEmail()
  email: string;
  role: [];
  @IsPhoneNumber()
  phone: string;
  @IsString()
  profilepics: string;
  @IsString()
  lat: string;
  @IsString()
  lng: string;
}
