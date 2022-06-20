import {
  USER_TBLE,
  CATEGORY_TBLE,
  SERVICE_TBLE,
  SERVICE_PROVIDER,
  SERVICE_PROCESS,
  PROVIDER_CASE,
  APP_INFO,
} from '../common/constrain';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AccountDto } from './dto/account.dto';

import { CategoriesDto } from './dto/categories.dto';
import { Services } from './dto/services.dto';
import { AppInfoDto } from './dto/appinfo.dto';
import { ServiceProviderDto } from './dto/serviceprovider.dto';
import fs, { Mode } from 'fs';
// import { AccountDto } from '../auth/dto/account.dto';

@Injectable()
export class GenerateDataService {
  constructor(
    @InjectModel(USER_TBLE) private accountDB: Model<AccountDto>,
    @InjectModel(CATEGORY_TBLE) private categoryDB: Model<CategoriesDto>,
    @InjectModel(SERVICE_TBLE) private serviceDB: Model<Services>,
    @InjectModel(APP_INFO) private appDB: Model<AppInfoDto>,
    @InjectModel(SERVICE_PROVIDER)
    private serviceprovider: Model<ServiceProviderDto>,
  ) {}
  userData = [
    {
      username: 'kim',
      password: 'kim_123',
      email: 'kim@gmail.com',
      role: ['user'],
      phone: '01002563449',
      profilepics:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      location: { type: 'Point', coordinates: [32.287242, 30.597103] },
    },
    {
      username: 'Jack',
      password: 'jack_123',
      email: 'jack@gmail.com',
      role: ['PROVIDER'],
      phone: '01334526778',
      profilepics:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      location: { type: 'Point', coordinates: [32.283651, 30.599079] },
    },
    {
      username: 'Lego',
      password: 'lego_123',
      email: 'lego@gmail.com',
      role: ['PROVIDER'],
      phone: '01214563998',
      profilepics:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      location: { type: 'Point', coordinates: [32.271392, 30.597625] },
    },
    {
      username: 'Gilbert',
      password: 'gilbert_123',
      email: 'gilbert@gmail.com',
      role: ['PROVIDER'],
      phone: '01002356887',
      profilepics:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      location: { type: 'Point', coordinates: [32.263494, 30.615456] },
    },
    {
      username: 'Alex',
      password: 'alex_123',
      email: 'alex@gmail.com',
      role: ['PROVIDER'],
      phone: '01502362558',
      profilepics:
        'https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      location: { type: 'Point', coordinates: [32.24411, 30.617919] },
    },
    {
      username: 'Deloise',
      password: 'deloise_123',
      email: 'deloise@gmail.com',
      role: ['PROVIDER'],
      phone: '01236524789',
      profilepics:
        'https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      location: { type: 'Point', coordinates: [32.284141, 30.606795] },
    },
    {
      username: 'CJDate',
      password: 'cjdate_123',
      email: 'cjdate@gmail.com',
      role: ['PROVIDER'],
      phone: '01236521445',
      profilepics:
        'https://images.unsplash.com/photo-1629467057571-42d22d8f0cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80',
      location: { type: 'Point', coordinates: [32.252991, 30.614985] },
    },
    {
      username: 'Linus Torvalds',
      password: 'linus_123',
      email: 'linus@gmail.com',
      role: ['ADMIN'],
      phone: '01006282779',
      profilepics:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80',
      location: { type: 'Point', coordinates: [32.303314, 30.608611] },
    },
    {
      username: 'Jennifer',
      password: 'jennifer_123',
      email: 'jennifer@gmail.com',
      role: ['user'],
      phone: '01224578889',
      profilepics:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      location: { type: 'Point', coordinates: [32.254078, 30.604975] },
    },
    {
      username: 'Courteney',
      password: 'courtenery_123',
      email: 'courtenery@gmail.com',
      role: ['PROVIDER'],
      phone: '01524523669',
      profilepics:
        'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      location: { type: 'Point', coordinates: [32.262364, 30.605696] },
    },
    {
      username: 'Anne Rice',
      password: 'anne_123',
      email: 'anne@gmail.com',
      role: ['PROVIDER'],
      phone: '01523789554',
      profilepics:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      location: { type: 'Point', coordinates: [32.258602, 30.593688] },
    },
    {
      username: 'Rebecca Romijn',
      password: 'rebecca_123',
      email: 'rebecca@gmail.com',
      role: ['user'],
      phone: '01523652448',
      profilepics:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      location: { type: 'Point', coordinates: [32.30149, 30.613263] },
    },
    {
      username: 'Samantha Mathis',
      password: 'samantha_123',
      email: 'samantha@gmail.com',
      role: ['PROVIDER'],
      phone: '01547896885',
      profilepics:
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      location: { type: 'Point', coordinates: [32.304014, 30.611162] },
    },
    {
      username: 'Laura Harring',
      password: 'laura_123',
      email: 'laura@gmail.com',
      role: ['PROVIDER'],
      phone: '01298756482',
      profilepics:
        'https://images.unsplash.com/photo-1521252659862-eec69941b071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=325&q=80',
      location: { type: 'Point', coordinates: [32.299655, 30.613674] },
    },
    {
      username: 'Bridgette Wilson',
      password: 'bridgette_123',
      email: 'bridgette@gmail.com',
      role: ['PROVIDER'],
      phone: '01578906655',
      profilepics:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      location: { type: 'Point', coordinates: [32.315507, 30.614293] },
    },
    {
      username: 'Jessica McNamee',
      password: 'jessica_123',
      email: 'jessica@gmail.com',
      role: ['user'],
      phone: '01296685470',
      profilepics:
        'https://images.unsplash.com/photo-1564222576620-3fc4b6f6bb95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      location: { type: 'Point', coordinates: [32.291967, 30.619011] },
    },
  ];
  categoryData = [
    {
      categoryName: 'Home',
      appcommission: 25,
    },
    {
      categoryName: 'Software',
      appcommission: 15,
    },
    {
      categoryName: 'Car',
      appcommission: 2.5,
    },
  ];

  serviceData = [
    {
      category: 'Home',
      title: 'plumber',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nunc at mi accumsan mollis. Sed vitae egestas justo. Nam nec lorem in sapien elementum rutrum eget eget neque',
    },
    {
      category: 'Home',
      title: 'electricity',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nunc at mi accumsan mollis. Sed vitae egestas justo. Nam nec lorem in sapien elementum rutrum eget eget neque',
    },
    {
      category: 'Home',
      title: 'painter',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nunc at mi accumsan mollis. Sed vitae egestas justo. Nam nec lorem in sapien elementum rutrum eget eget neque',
    },
    {
      category: 'Software',
      title: 'Designer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nunc at mi accumsan mollis. Sed vitae egestas justo. Nam nec lorem in sapien elementum rutrum eget eget neque',
    },
    {
      category: 'Software',
      title: 'Developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nunc at mi accumsan mollis. Sed vitae egestas justo. Nam nec lorem in sapien elementum rutrum eget eget neque',
    },
    {
      category: 'Car',
      title: 'Mechanic',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nunc at mi accumsan mollis. Sed vitae egestas justo. Nam nec lorem in sapien elementum rutrum eget eget neque',
    },
    {
      category: 'Car',
      title: 'wash',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nunc at mi accumsan mollis. Sed vitae egestas justo. Nam nec lorem in sapien elementum rutrum eget eget neque',
    },
  ];

  appinfoData = [
    {
      app_money: 0,
      app_tax: 12,
    },
  ];

  ServiceProviderData = [
    {
      serviceName: 'plumber',
      user_email: 'jack@gmail.com',
      grate: 3,
      serviceprice: 500,
      active: true,
    },
    {
      serviceName: 'plumber',
      user_email: 'lego@gmail.com',
      grate: 4,
      serviceprice: 650,
      active: true,
    },
    {
      serviceName: 'electricity',
      user_email: 'gilbert@gmail.com',
      grate: 3,
      serviceprice: 300,
      active: true,
    },
    {
      serviceName: 'painter',
      user_email: 'alex@gmail.com',
      grate: 5,
      serviceprice: 6200,
      active: true,
    },
    {
      serviceName: 'Mechanic',
      user_email: 'deloise@gmail.com',
      grate: 5,
      serviceprice: 5200,
      active: true,
    },
    {
      serviceName: 'wash',
      user_email: 'cjdate@gmail.com',
      grate: 4,
      serviceprice: 600,
      active: true,
    },
    {
      serviceName: 'Designer',
      user_email: 'courtenery@gmail.com',
      grate: 5,
      serviceprice: 6000,
      active: true,
    },
    {
      serviceName: 'Designer',
      user_email: 'anne@gmail.com',
      grate: 4,
      serviceprice: 2000,
      active: true,
    },
    {
      serviceName: 'Developer',
      user_email: 'samantha@gmail.com',
      grate: 4,
      serviceprice: 5000,
      active: true,
    },
    {
      serviceName: 'Developer',
      user_email: 'laura@gmail.com',
      grate: 5,
      serviceprice: 6000,
      active: true,
    },
  ];
  async CreateData() {
    console.log('welcome');
    // const Da = fs.readFileSync('./Data.json');
    // console.log(Da);
    // console.log(this.userData);

    await this.userData.map(async (user) => {
      await this.userCreate(user);
    });
    await this.categoryData.map(async (cate) => {
      await this.categoryCreate(cate);
    });

    // await this.appinfoData.map(async (appda) => {
    //   await this.appinfoCreate(appda);
    // });

    // await this.ServiceProviderData.map(async (serprov) => {
    //   await this.serviceProviderCreate(serprov);
    // });
  }

  async genservice() {
    await this.serviceData.map(async (service) => {
      await this.serviceCreate(service);
    });
  }

  async genin() {
    await this.appinfoData.map(async (appda) => {
      await this.appinfoCreate(appda);
    });
  }

  async provSer() {
    await this.ServiceProviderData.map(async (serprov) => {
      await this.serviceProviderCreate(serprov);
    });
  }

  async userCreate(user_data) {
    console.log(user_data.password);
    const hashpassword = await bcrypt.hashSync(user_data.password, 10);
    console.log(hashpassword);
    const result = new this.accountDB({
      username: user_data.username,
      email: user_data.email,
      role: user_data.role,
      phone: user_data.phone,
      profilepics: user_data.profilepics,
      password: hashpassword,
      location: user_data.location,
    });
    await result.save();
  }

  async categoryCreate(category_data) {
    const result = new this.categoryDB({
      categoryName: category_data.categoryName,
      appcommission: category_data.appcommission,
    });
    await result.save();
  }

  async serviceCreate(serviceda) {
    console.log('ServiceDDD');
    const catData = await this.categoryDB.findOne({
      categoryName: serviceda.category,
    });
    console.log(catData);
    const result = new this.serviceDB({
      category_Id: catData._id,
      title: serviceda.title,
      description: serviceda.description,
    });
    await result.save();
  }

  async appinfoCreate(appinfo) {
    const result = new this.appDB({
      app_money: appinfo.app_money,
      app_tax: appinfo.app_tax,
    });
    await result.save();
  }

  async serviceProviderCreate(serviceprovider_data) {
    const serda = await this.serviceDB.findOne({
      title: serviceprovider_data.serviceName,
    });
    console.log('ser ', serda);
    if (serda === null) {
      console.log('stoped ', serviceprovider_data.serviceName);
    }
    const userD = await this.accountDB.findOne({
      email: serviceprovider_data.user_email,
    });
    console.log('user ', userD);

    const result = new this.serviceprovider({
      service_id: serda._id,
      user_id: userD._id,
      grate: serviceprovider_data.grate,
      serviceprice: serviceprovider_data.serviceprice,
      active: serviceprovider_data.active,
    });
    await result.save();
  }
}

// await this.accountDB.create({
//   username: user.username,
//   password: hashpassword,
//   email: user.email,
//   role: user.role,
//   phone: user.phone,
//   profilepics: user.profilepics,
//   location: [+user.lng, +user.lat],
// });
