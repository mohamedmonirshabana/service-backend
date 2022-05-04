import { Controller, Get, Post, Put, Body, UseGuards } from '@nestjs/common';
import { AppInfoService } from './appinfo.service';
import { AdminGuard } from '../guards/admin.guard';

@Controller('appinfo')
@UseGuards(AdminGuard)
export class AppInfoController {
  constructor(private appinfoDB: AppInfoService) {}

  @Post()
  async AddMoney(@Body('tax') tax: number) {
    await this.appinfoDB.addmoneyforFirstTime(tax);
  }

  @Put()
  async editmoney(@Body('money') money: number) {
    await this.appinfoDB.updateInfo(money);
  }

  @Get()
  async showinfo() {
    return await this.appinfoDB.showBasket();
  }
}
