import { Controller, Get, Post, Put, Body, UseGuards } from '@nestjs/common';
import { AppInfoService } from './appinfo.service';
import { AdminGuard } from '../guards/admin.guard';
import { AppInfoDto } from './dto/appinfo.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('appinfo')
@UseGuards(AdminGuard)
@ApiTags('App Info')
@ApiBearerAuth('access-token')
export class AppInfoController {
  constructor(private appinfoDB: AppInfoService) {}

  @Post()
  @ApiBody({ type: AppInfoDto })
  async AddMoney(@Body() appdata: AppInfoDto) {
    await this.appinfoDB.addmoneyforFirstTime(appdata);
  }

  @Get()
  async showinfo() {
    return await this.appinfoDB.showBasket();
  }

  @Put()
  async addtax(@Body('tax') tax: number) {
    await this.appinfoDB.changeTax(tax);
  }
}
