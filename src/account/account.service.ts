import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AccountDto } from './dto/account.dto';
import { AccountAdd } from './dto/accountAdd.Dto';
import { USER_TBLE } from '../../common/constrain';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRECT } from '../../common/constrain';

@Injectable()
export class AccountService {
  constructor(@InjectModel(USER_TBLE) private accountDB: Model<AccountAdd>) {}

  async register(userData: AccountDto) {
    const maileCheck = await this.checkEmail(userData.email);

    if (maileCheck) {
      throw new BadRequestException();
    }
    const hashpassword = await bcrypt.hashSync(userData.password, 10);
    const result = new this.accountDB({
      username: userData.username,
      email: userData.email,
      role: userData.role,
      phone: userData.phone,
      password: hashpassword,
      profilepics: userData.profilepics,
      location: { type: 'Point', coordinates: [+userData.lng, +userData.lat] },
    });
    await result.save();
    const authJwtToken = jwt.sign(
      { ud: result._id, mail: result.email, roles: result.role },
      JWT_SECRECT,
    );
    return authJwtToken;
  }
  async getAccount(id: string) {
    const result = await this.accountDB.findOne({ _id: id });
    return result;
  }

  async updateAccount(id: string, change: AccountDto) {
    return await this.accountDB.findByIdAndUpdate({ _id: id }, change, {
      new: true,
    });
  }

  async changePawword(id: string, oldpassword: string, newpassword: string) {
    const result = await this.accountDB.findOne({ _id: id });
    const checkpassword = bcrypt.compareSync(oldpassword, result.password);
    if (checkpassword) {
      const hasnew = await bcrypt.hashSync(newpassword, 10);
      return await this.accountDB
        .findOneAndUpdate({ _id: id }, { $set: { password: hasnew } })
        .exec();
    }
  }

  async login(email: string, password: string) {
    const mailcheck = await this.accountDB.findOne({ email: email }).exec();
    if (!mailcheck) {
      throw new UnauthorizedException();
    } else {
      const hashpass = mailcheck.password;
      const checkpass = bcrypt.compareSync(password, hashpass);
      if (!checkpass) {
        throw new UnauthorizedException();
      } else {
        const jwtAuthToken = jwt.sign(
          { ud: mailcheck._id, mail: mailcheck.email, roles: mailcheck.role },
          JWT_SECRECT,
        );
        return jwtAuthToken;
      }
    }
  }

  private async checkEmail(email: string): Promise<boolean> {
    const result = await this.accountDB.findOne({ email: email });
    if (result) {
      return true;
    }
    return false;
  }
}
