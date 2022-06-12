import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SERVICE_PROVIDER } from '../common/constrain';
import { ServiceProviderDto } from './dto/serviceprovider.dto';
import { RequestServiceProviderDto } from './dto/requestServiceprovider.dto';
import { AccountService } from '../account/account.service';
import { RoleDto } from '../account/dto/chrole.dto';
@Injectable()
export class ServiceProviderService {
  constructor(
    @InjectModel(SERVICE_PROVIDER)
    private serviceproviderDB: Model<ServiceProviderDto>,
    private accountserv: AccountService,
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
    const result = await this.serviceproviderDB
      .findOne({
        $and: [{ _id: id }, { active: false }],
      })
      .exec();
    console.log(result);
    result.active = true;
    await result.save();
    return { message: "it's OK finish it" };
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

  async getProviderrequest() {
    const data = await this.serviceproviderDB
      .find({ active: false })
      .populate('user_id')
      .populate('service_id')
      .exec();
    return data;
  }

  async getServiceprovider(id: string) {
    return await this.serviceproviderDB.findById(id);
  }

  async rejectRequest(id: string) {
    return await this.serviceproviderDB.findByIdAndDelete(id);
  }
}
