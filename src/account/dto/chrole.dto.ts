import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
  @IsString()
  @ApiProperty({ type: Array, description: 'role' })
  role: [string];
}
