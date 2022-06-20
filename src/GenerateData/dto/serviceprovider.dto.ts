import { IsString, IsMongoId, IsNumber, IsBoolean } from 'class-validator';
export class ServiceProviderDto {
  @IsMongoId()
  _id: string;
  @IsMongoId()
  service_id: string;
  @IsMongoId()
  user_id: string;
  @IsNumber()
  grate: number;
  @IsNumber()
  serviceprice: number;
  @IsBoolean()
  active: boolean;
}
