import { IsString, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddRequest {
  @IsMongoId()
  @ApiProperty({ type: String, description: 'service provider ID' })
  service_provider_Id: string;
  @IsMongoId()
  @ApiProperty({ type: String, description: 'user ID' })
  user_Id: string;
  @IsMongoId()
  @ApiProperty({ type: String, description: 'Provider ID' })
  provider_Id: string;
}
