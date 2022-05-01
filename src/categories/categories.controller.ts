import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from './dto/categories.dto';

@Controller('category')
export class CategoriesController {
  constructor(private categoryDB: CategoriesService) {}

  @Post()
  async addCategory(@Body() category: CategoriesDto) {
    console.log(category);
    return await this.categoryDB.addCategory(category);
  }

  @Get()
  async getAllCategory() {
    return await this.categoryDB.findAll();
  }
}
