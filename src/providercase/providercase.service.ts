import { Injectable } from '@nestjs/common';
import { PROVIDER_CASE } from '../../common/constrain';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProviderCaseDto } from './dto/providercase.dto';

@Injectable()
export class ProviderCaseService {
  constructor(
    @InjectModel(PROVIDER_CASE) private providercaseDB: Model<ProviderCaseDto>,
  ) {}

  async addmoney(providerid: string, money: number) {
    const data = new this.providercaseDB({
      provider_id: providerid,
      moneycase: money,
    });
    await data.save();
  }

  async getallinfo(providerid: string) {
    return await this.providercaseDB.findOne({ provider_id: providerid });
  }

  async getallMoney(id: string) {
    const data = await this.providercaseDB.findOne({ _id: id });
    data.moneycase = 0;
    data.save();
  }
}
