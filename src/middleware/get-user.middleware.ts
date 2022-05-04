import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRECT } from '../../common/constrain';

@Injectable()
export class GetUserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const authJwtToken = req.headers.authorization;
    if (!authJwtToken) {
      next();
      return;
    }
    try {
      const user = jwt.verify(authJwtToken, JWT_SECRECT);
      if (user) {
        req['user'] = user;
      }
    } catch (err) {
      console.log(err);
    }
    next();
  }
}
