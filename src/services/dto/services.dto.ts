import { IsString, IsMongoId } from 'class-validator';

export class Services {
  @IsString()
  @IsMongoId()
  category_Id: string;
  @IsString()
  title: string;
  @IsString()
  description: string;
}
