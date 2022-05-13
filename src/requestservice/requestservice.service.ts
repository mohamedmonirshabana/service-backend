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
    return await this.requestServiceDB.create({
      serviceProvider_Id: serviceproviderid,
      user_Id: userid,
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
    await this.requestServiceDB.findOneAndUpdate(
      { _id: id },
      { $set: [{ request_status: true }] },
    );
  }

  async removerequest(id: string) {
    await this.requestServiceDB.findOneAndRemove({ _id: id });
  }
}
