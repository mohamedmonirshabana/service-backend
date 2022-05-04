import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppInfoDto } from './dto/appinfo.dto';
import { APP_INFO } from '../../common/constrain';

@Injectable()
export class AppInfoService {
  constructor(@InjectModel(APP_INFO) private appinfoDB: Model<AppInfoDto>) {}

  async addmoneyforFirstTime(app_tax: number) {
      const Data = new this.appinfoDB({
          app_money: 0,
          app_tax:
    });
     await  Data.save();
      
  }
    
    async updateInfo(money: number) {
        const data = await this.appinfoDB.findOne();
        data.app_money += money;
        data.save()
    }

    async showBasket()
    {
        return await this.appinfoDB.findOne();
        
    }
}
