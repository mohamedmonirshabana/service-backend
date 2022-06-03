import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { USER_TBLE } from '../common/constrain';
import { AccountAdd } from './dto/accountAdd.Dto';
import { AccountLoginDto } from './dto/accountlogin.dto';
import { AccountDto } from './dto/account.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRECT } from '../common/constrain';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
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
      role: userData.role === undefined ? ['user'] : userData.role,
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
    return { token: authJwtToken };
  }

  async login(accountlogin: AccountLoginDto) {
    const mailcheck = await this.accountDB
      .findOne({ email: accountlogin.email.toLocaleLowerCase() })
      .exec();
    if (!mailcheck) {
      throw new UnauthorizedException();
    } else {
      const hashpass = mailcheck.password;
      const checkpass = bcrypt.compareSync(accountlogin.password, hashpass);
      if (!checkpass) {
        throw new UnauthorizedException();
      } else {
        const jwtAuthToken = jwt.sign(
          { ud: mailcheck._id, mail: mailcheck.email, roles: mailcheck.role },
          JWT_SECRECT,
        );
        return {
          id: mailcheck._id,
          username: mailcheck.username,
          profilepic: mailcheck.profilepics,
          role: mailcheck.role.toString(),
          token: jwtAuthToken,
        };
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
