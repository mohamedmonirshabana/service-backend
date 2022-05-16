import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceProcessDto } from './dto/serviceprocess.dto';
import { SERVICE_PROCESS } from '../common/constrain';
import { stringify } from 'querystring';
import { AddCommentandRateDto } from './dto/addcomment.dto';
@Injectable()
export class ServiceProcessService {
  constructor(
    @InjectModel(SERVICE_PROCESS)
    private serviceprodcessDB: Model<ServiceProcessDto>,
  ) {}
  async getProcessForUser(userid: string) {
    const result = await this.serviceprodcessDB.find({ user_id: userid });
    return result;
  }

  async getProcessForProvider(providerid: string) {
    const result = await this.serviceprodcessDB.find({
      providerid: providerid,
    });
    return result;
  }

  async addComment(commentandrate: AddCommentandRateDto, id: string) {
    const Data = await this.serviceprodcessDB.findOne({ _id: id });
    Data.userComment = commentandrate.userComment;
    Data.userRating = commentandrate.userRating;
    await Data.save();
  }

  async payment(id: string) {
    const Data = await this.serviceprodcessDB.findOne({ _id: id });
    Data.hand_payment = true;
    Data.save();
  }

  // async processDone(id: string) {
  //   // await this.serviceprodcessDB.findByIdAndUpdate(id, {
  //   //   $set: [{ status: true }],
  //   // });
  // }
  // async addCommentandRate(id: string, comment: string, rate: number) {
  //   // const Data = await this.serviceprodcessDB.findOne({ _id: id });
  //   // Data.userComment = comment;
  //   // Data.userRating = rate;
  //   // Data.save();
  // }

  // async getprocessinfo(id: string) {
  //   const Data = await this.serviceprodcessDB.findOne({ _id: id });
  //   return Data;
  // }

  // async getproviderNumbyuserID(userid: string) {
  //   return await this.serviceprodcessDB.find({ user_Id: userid }).select('_id');
  // }

  //get for user to get Location

  async addRequestData(
    serviceprovider_id,
    user_id,
    provider_id,
    location,
    provider_price,
    category_comission,
    app_tax,
    total_price,
  ) {
    const Data = new this.serviceprodcessDB({
      serviceproviderId: serviceprovider_id,
      user_id: user_id,
      providerid: provider_id,
      location: location,
      provider_price: provider_price,
      Category_comission: category_comission,
      App_tax: app_tax,
      total_price: total_price,
      arriveState: false,
      finish_Status: false,
      hand_payment: false,
    });
    await Data.save();
    return Data;
  }
}
