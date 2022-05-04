import { Injectable } from '@nestjs/common';
import { AuthorizationGuard } from './authorization.guard';

@Injectable()
export class ProviderGuard extends AuthorizationGuard {
  constructor() {
    super(['PROVIDER']);
  }
}
