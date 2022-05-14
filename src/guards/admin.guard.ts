import { Injectable } from '@nestjs/common';
import { AuthorizationGuard } from './authorization.guard';
import { ADMIN } from '../common/constrain';
@Injectable()
export class AdminGuard extends AuthorizationGuard {
  constructor() {
    super(['ADMIN']);
  }
}
