import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceProcessDto } from './dto/serviceprocess.dto';
import { SERVICE_PROCESS } from '../common/constrain';
import { stringify } from 'querystring';

@Injectable()
export class ServiceProcessService {
  constructor(
    @InjectModel(SERVICE_PROCESS)
    private serviceprodcessDB: Model<ServiceProcessDto>,
  ) {}
  async processDone(id: string) {
    await this.serviceprodcessDB.findByIdAndUpdate(id, {
      $set: [{ status: true }],
    });
  }
  async addCommentandRate(id: string, comment: string, rate: number) {
    const Data = await this.serviceprodcessDB.findOne({ _id: id });
    Data.userComment = comment;
    Data.userRating = rate;
    Data.save();
  }

  async getprocessinfo(id: string) {
    const Data = await this.serviceprodcessDB.findOne({ _id: id });
    return Data;
  }

  async getproviderNumbyuserID(userid: string) {
    return await this.serviceprodcessDB.find({ user_Id: userid }).select('_id');
  }

  //get for user to get Location
}
