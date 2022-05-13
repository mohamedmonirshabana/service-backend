import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SERVICE_PROVIDER } from '../common/constrain';
import { ServiceProviderDto } from './dto/serviceprovider.dto';
import { RequestServiceProviderDto } from './dto/requestServiceprovider.dto';

@Injectable()
export class ServiceProviderService {
  constructor(
    @InjectModel(SERVICE_PROVIDER)
    private serviceproviderDB: Model<ServiceProviderDto>,
  ) {}

  async findAllserviceprovider(
    serviceId: string,
  ): Promise<ServiceProviderDto[]> {
    return await this.serviceproviderDB
      .find({
        $and: [{ service_id: serviceId }, { active: true }],
      })
      .populate('user_id');
  }

  async requestToServiceprovider(requestservice: RequestServiceProviderDto) {
    const Data = await this.serviceproviderDB.create({
      user_id: requestservice.user_id,
      service_id: requestservice.service_id,
      serviceprice: requestservice.serviceprice,
      active: false,
    });
    return Data;
  }

  async getAllRequest_ToProvider() {
    return await this.serviceproviderDB.find({ active: false });
  }

  async confirmprovider(id: string) {
    const result = await this.serviceproviderDB.findOneAndUpdate(
      { user_id: id },
      { $set: { active: true } },
    );
  }
  async getAllProvider() {
    return await this.serviceproviderDB
      .find({ active: true })
      .populate('user_id');
  }

  async getDataByuserID(id) {
    return await this.serviceproviderDB.findOne({ user_id: id }).exec();
  }

  async getAll() {
    return await this.serviceproviderDB.find();
  }
}
