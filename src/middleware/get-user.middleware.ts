import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRECT } from '../common/constrain';

@Injectable()
export class GetUserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const authJwtToken = req.headers.authorization;
    const spt = authJwtToken.split(' ');
    if (!authJwtToken) {
      next();
      return;
    }
    try {
      //get by Array
      const user = jwt.verify(spt[1], JWT_SECRECT);
      // console.log(user);
      if (user) {
        req['user'] = user;
      }
    } catch (err) {
      console.log(err);
    }
    next();
  }
}
