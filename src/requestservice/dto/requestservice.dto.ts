import { IsString, IsMongoId } from 'class-validator';

export class RequestServiceDto {
  @IsMongoId()
  _id: string;
  @IsMongoId()
  serviceProvider_Id: string;
  @IsMongoId()
  user_Id: string;
  request_status: boolean;
}
