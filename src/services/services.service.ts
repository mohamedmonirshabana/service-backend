import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Services } from './dto/services.dto';
import { SERVICE_TBLE } from '../common/constrain';

@Injectable()
export class ServicesService {
  constructor(@InjectModel(SERVICE_TBLE) private serviceDB: Model<Services>) {}

  async addService(service: Services) {
    const serviceData = new this.serviceDB(service);
    return await serviceData.save();
  }

  async editService(id: string, serverD: Partial<Services>) {
    return await this.serviceDB.findOneAndUpdate({ _id: id }, serverD, {
      new: true,
    });
  }

  async findByServiceName(serviceName: string) {
    return await this.serviceDB.findOne({ serviceName: serviceName });
  }

  async findByID(id: string) {
    const data = await this.serviceDB.find({ _id: id });
    return data;
  }

  async findByCategoryID(id: string) {
    return await this.serviceDB.find({ category_Id: id });
  }
}
