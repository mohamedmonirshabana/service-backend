import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AppInfoDto {
  @IsNumber()
  @ApiProperty({ type: Number, description: 'app_money' })
  app_money: number;
  @IsNumber()
  @ApiProperty({ type: Number, description: 'tax' })
  app_tax: number;
}
