import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from './dto/categories.dto';
import { AdminGuard } from '../guards/admin.guard';
import { AuthenticationGuard } from '../guards/authentication.guard';

import { ApiTags } from '@nestjs/swagger';

@Controller('category')
@ApiTags('Category')
export class CategoriesController {
  constructor(private categoryDB: CategoriesService) {}

  @Post()
  @UseGuards(AuthenticationGuard)
  @UseGuards(AdminGuard)
  async addCategory(@Body() category: CategoriesDto) {
    console.log(category);
    return await this.categoryDB.addCategory(category);
  }

  @Get()
  async getAllCategory() {
    return await this.categoryDB.findAll();
  }
}
