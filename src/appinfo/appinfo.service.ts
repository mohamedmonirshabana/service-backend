import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppInfoDto } from './dto/appinfo.dto';
import { APP_INFO } from '../common/constrain';

@Injectable()
export class AppInfoService {
  constructor(@InjectModel(APP_INFO) private appinfoDB: Model<AppInfoDto>) {}

  async addmoneyforFirstTime(appinfo: AppInfoDto) {
    const Data = new this.appinfoDB({
      app_money: 0,
      app_tax: appinfo.app_tax,
    });
    await Data.save();
  }

  async updateInfo(money: number) {
    console.log('For info');
    const data = await this.appinfoDB.findOne();
    data.app_money += money;
    data.save();
  }

  async changeTax(tax: number) {
    const data = await this.appinfoDB.findOne();
    const dataMoney = data.app_money;
    data.app_tax = tax;
    data.app_money = dataMoney;
    data.save();
    return { message: 'Good' };
  }

  async showBasket() {
    return await this.appinfoDB.findOne();
  }

  async returnInfo() {
    return await this.appinfoDB.findOne();
  }
}
