import { IsBoolean, IsMongoId, IsNumber, IsString } from 'class-validator';

export class ServiceProcessDto {
  @IsMongoId()
  serviceproviderId: string;
  @IsMongoId()
  userId: string;
  @IsNumber()
  userRating: number;
  @IsString()
  userComment: string;
  @IsBoolean()
  status: boolean;
}
