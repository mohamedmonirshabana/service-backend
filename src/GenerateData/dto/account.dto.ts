import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsMongoId, IsPhoneNumber, IsString } from 'class-validator';

export class AccountDto {
  // @IsMongoId()
  // _id: string;
  @IsString()
  @ApiProperty({ type: String, description: 'user Name' })
  username: string;
  @IsString()
  @ApiProperty({ type: String, description: 'Password' })
  password: string;
  @IsString()
  @IsEmail()
  @ApiProperty({ type: String, description: 'user@mail.com' })
  email: string;
  role: [string];
  @IsPhoneNumber()
  @ApiProperty({ type: String, description: '0100000000' })
  phone: string;
  @IsString()
  @ApiProperty({ type: String, description: 'profPic' })
  profilepics: string;
  location: { type: string; coordinates: [number, number] };
  // @IsString()
  // @ApiProperty({ type: String, description: '65465465465' })
  // lat: string;
  // @IsString()
  // @ApiProperty({ type: String, description: '65465465465' })
  // lng: string;
}
