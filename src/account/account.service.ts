import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AccountDto } from './dto/account.dto';
import { AccountLoginDto } from './dto/accountlogin.dto';
import { AccountAdd } from './dto/accountAdd.Dto';
import { USER_TBLE } from '../common/constrain';
import { ProfileDto } from './dto/profile.dto';
import { PasswordDto } from './dto/password.dto';
import { UpdateAccountDto } from './dto/updateAccount.Dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRECT } from '../common/constrain';
import { RoleDto } from './dto/chrole.dto';

@Injectable()
export class AccountService {
  constructor(@InjectModel(USER_TBLE) private accountDB: Model<AccountAdd>) {}

  async getAccount(id: string) {
    const result = await this.accountDB.findOne({ _id: id });
    return result;
  }

  async updateAccount(id: string, change: UpdateAccountDto) {
    return await this.accountDB.findByIdAndUpdate({ _id: id }, change, {
      new: true,
    });
  }

  async changePawword(id: string, pass: PasswordDto) {
    const result = await this.accountDB.findOne({ _id: id });
    const checkpassword = bcrypt.compareSync(pass.oldPassword, result.password);
    if (checkpassword) {
      const hasnew = await bcrypt.hashSync(pass.newPassword, 10);
      return await this.accountDB
        .findOneAndUpdate({ _id: id }, { $set: { password: hasnew } })
        .exec();
    }
  }

  async getAllusers() {
    console.log('start');
    return await this.accountDB.find();
  }

  async getAll_User(role: string) {
    const data = await this.accountDB.find({ role: { $in: [role] } });
    return data;
  }

  async chrole(id: string, role: RoleDto) {
    const Data1 = await this.accountDB.findById(id);
    console.log(Data1);
    const result = await this.accountDB
      .findByIdAndUpdate(id, {
        $set: { role: role.role },
      })
      .exec();
    return result;
  }

  async privchan(id: string, role: string) {
    const Data1 = await this.accountDB.findById(id);
    console.log(Data1);
    const result = await this.accountDB
      .findByIdAndUpdate(id, {
        $set: { role: role },
      })
      .exec();
  }
}
