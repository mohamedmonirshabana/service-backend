import { IsString, IsMongoId, IsNumber, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RequestServiceProviderDto {
  @IsString()
  @IsMongoId()
  @ApiProperty({ type: String, description: 'service ID' })
  service_id: string;
  @IsString()
  @IsMongoId()
  @ApiProperty({ type: String, description: 'user ID' })
  user_id: string;
  @IsNumber()
  @ApiProperty({ type: Number, description: 'price' })
  serviceprice: number;
}
