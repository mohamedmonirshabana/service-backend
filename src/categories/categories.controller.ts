import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from './dto/categories.dto';
import { AdminGuard } from '../guards/admin.guard';
import { AuthenticationGuard } from '../guards/authentication.guard';

@Controller('category')
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
