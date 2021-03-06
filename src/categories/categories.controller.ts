import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  HttpCode,
  HttpStatus,
  Put,
  Param,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from './dto/categories.dto';
import { AdminGuard } from '../guards/admin.guard';
import { AuthenticationGuard } from '../guards/authentication.guard';

import { ApiTags, ApiBearerAuth, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('category')
@ApiTags('Category')
export class CategoriesController {
  constructor(private categoryDB: CategoriesService) {}

  @Post('/')
  @UseGuards(AuthenticationGuard)
  @UseGuards(AdminGuard)
  @ApiBearerAuth('access-token')
  @ApiBody({ type: CategoriesDto })
  async addCategory(@Body() category: CategoriesDto) {
    return await this.categoryDB.addCategory(category);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllCategory() {
    // console.log('KoKo');
    return await this.categoryDB.findAll();
  }

  @Put('update/:id')
  async updatecategory(
    @Param('id') id: string,
    @Body() catdata: CategoriesDto,
  ) {
    // console.log('Dddd');
    return await this.categoryDB.updateCategory(id, catdata);
  }

  @Get('/category/:id')
  async CategoryDatabyid(@Param('id') id: string) {
    return this.categoryDB.CatData(id);
  }
}
