import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RequestServiceDto } from './dto/requestservice.dto';
import { REQUEST_SERVICE } from '../common/constrain';
import { Model } from 'mongoose';

import { AccountService } from '../account/account.service';
import { ServiceProviderService } from '../serviceprovider/serviceprovider.service';
import { ServicesService } from '../services/services.service';
import { CategoriesService } from '../categories/categories.service';
import { AppInfoService } from '../appinfo/appinfo.service';
import { ServiceProcessService } from '../serviceprocess/serviceprocess.service';
@Injectable()
export class RequestServiceService {
  constructor(
    @InjectModel(REQUEST_SERVICE)
    private requestServiceDB: Model<RequestServiceDto>,
    private accountserv: AccountService,
    private serviceProviderData: ServiceProviderService,
    private serviceData: ServicesService,
    private cateData: CategoriesService,
    private appinfo: AppInfoService,
    private serviceprocess: ServiceProcessService,
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
    const userid = Data.user_Id;
    const user = await this.accountserv.getAccount(userid);
    const serviceProviderId = Data.serviceProvider_Id;
    const providerData = await this.serviceProviderData.getServiceprovider(
      serviceProviderId,
    );
    const price = providerData.serviceprice;
    const providerId = providerData.user_id;
    const serviceId = providerData.service_id;
    const servicedata = await this.serviceData.findByID(serviceId);
    const catID = servicedata[0].category_Id;
    const categoryData = await this.cateData.getCategoriesById(catID);
    const catComission = categoryData.appcommission;
    const appData = await this.appinfo.returnInfo();
    const tax = appData.app_tax;
    //------------
    const mycomission = price * catComission;
    const mytax = price * (tax / 100);
    const myTotal = price + mycomission + mytax;
    //-------------
    const Addprocess = await this.serviceprocess.addRequestData(
      serviceProviderId,
      userid,
      providerId,
      user.location,
      price,
      catComission,
      tax,
      myTotal,
    );
    //Calculate Total

    // serviceprovider ID,
    //      service id
    //        service collection
    //            categoryID -> Category collection
    //                Category Commission
    //  App Collection -> App Tax
    //      Price
    //      provider id
    //user ID
    //  location
    Data.request_status = true;
    Data.save();
    return Addprocess;
    //
  }

  async removerequest(id: string) {
    await this.requestServiceDB.findOneAndRemove({ _id: id });
  }
}
