import { IsBoolean, IsMongoId, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ServiceProcessDto {
  @IsMongoId()
  @ApiProperty({ type: String, description: 'service provider ID' })
  sserviceprovider_Id: string;
  @IsMongoId()
  @ApiProperty({ type: String, description: 'user ID' })
  user_id: string;
  location: { type: string; coordinates: [] };
  // @IsString()
  // @ApiProperty({ type: String, description: '65465465465' })
  // lat: string;
  // @IsString()
  // @ApiProperty({ type: String, description: '65465465465' })
  // lng: string;
  @IsString()
  @ApiProperty({ type: String, description: 'provider ID' })
  providerid: string;
  @IsNumber()
  @ApiProperty({ type: Number, description: 'price' })
  provider_price: number;
  @IsNumber()
  @ApiProperty({ type: Number, description: 'comission' })
  Category_comission: number;
  @IsNumber()
  @ApiProperty({ type: Number, description: 'app Tax' })
  App_tax: number;
  @IsNumber()
  @ApiProperty({ type: Number, description: 'total Price' })
  total_price: number;
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'arrive for provider' })
  arriveState: boolean;
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'finish' })
  finish_Status: boolean;
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'had payment' })
  hand_payment: boolean;

  @IsString()
  userComment: string;
  @IsNumber()
  userRating: number;
}
