import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsMongoId } from 'class-validator';

export class Services {
  @IsString()
  @IsMongoId()
  @ApiProperty({ type: String, description: 'category ID' })
  category_Id: string;
  @IsString()
  @ApiProperty({ type: String, description: 'Service Title' })
  title: string;
  @IsString()
  @ApiProperty({ type: String, description: 'Description' })
  description: string;
}
