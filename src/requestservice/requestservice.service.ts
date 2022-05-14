import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RequestServiceDto } from './dto/requestservice.dto';
import { REQUEST_SERVICE } from '../common/constrain';
import { Model } from 'mongoose';

@Injectable()
export class RequestServiceService {
  constructor(
    @InjectModel(REQUEST_SERVICE)
    private requestServiceDB: Model<RequestServiceDto>,
  ) {}

  async addRequest(userid: string, serviceproviderid: string) {
    console.log('Print');
    return await this.requestServiceDB.create({
      serviceProvider_Id: serviceproviderid,
      user_Id: userid,
      request_status: false,
    });
  }
  async getRequest_for_provider(providerid: string) {
    return await this.requestServiceDB
      .find({
        $and: [{ serviceProvider_Id: providerid }, { request_status: false }],
      })
      .exec();
  }

  async confirmrequest(id: string) {
    const Data = await this.requestServiceDB.findById(id).exec();
    //{ $set: [{ request_status: true }] }
    Data.request_status = true;
    Data.save();
  }

  async removerequest(id: string) {
    await this.requestServiceDB.findOneAndRemove({ _id: id });
  }
}
