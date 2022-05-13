import { IsEmail, IsString, IsPhoneNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAccountDto {
  @IsString()
  @ApiProperty({ type: String, description: 'user name' })
  username: string;
  @IsEmail()
  @ApiProperty({ type: String, description: 'user@mail.com' })
  email: string;
  @IsString()
  @IsPhoneNumber()
  @ApiProperty({ type: String, description: '+201000000' })
  phone: string;
  @IsString()
  @ApiProperty({ type: String, description: '65465465465' })
  lat: string;
  @IsString()
  @ApiProperty({ type: String, description: '65465465465' })
  lng: string;
}
