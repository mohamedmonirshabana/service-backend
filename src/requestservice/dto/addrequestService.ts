import { IsString, IsMongoId } from 'class-validator';

export class AddRequest {
  @IsMongoId()
  service_provider_Id: string;
  @IsMongoId()
  user_Id: string;
}
