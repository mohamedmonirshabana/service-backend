import { IsString, IsInt } from 'class-validator';

export class CategoriesDto {
  @IsString()
  categoryName: string;
  @IsInt()
  appcommission: number;
}
