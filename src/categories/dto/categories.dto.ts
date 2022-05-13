import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CategoriesDto {
  @IsString()
  @ApiProperty({ type: String, description: 'Category Name' })
  categoryName: string;
  @IsInt()
  @ApiProperty({ type: Number, description: '20.5' })
  appcommission: number;
}
