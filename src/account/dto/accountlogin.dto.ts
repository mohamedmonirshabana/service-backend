import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsEmail } from 'class-validator';

export class AccountLoginDto {
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsString()
  @ApiProperty()
  password: string;
}
