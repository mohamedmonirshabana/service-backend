import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PasswordDto {
  @IsString()
  @ApiProperty({ type: String, description: 'old Password' })
  oldPassword: string;

  @IsString()
  @ApiProperty({ type: String, description: 'new password' })
  newPassword: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Confirm Password' })
  confirmPassword: string;
}
