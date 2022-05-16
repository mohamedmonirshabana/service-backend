import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddCommentandRateDto {
  @IsString()
  @ApiProperty({ type: String, description: 'comment for service' })
  userComment: string;
  @IsNumber()
  @ApiProperty({ type: String, description: 'Rate for service' })
  userRating: number;
}
