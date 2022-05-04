import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private allowRoles: string[]) {}
  canActivate(context: ExecutionContext): boolean {
    const host = context.switchToHttp(),
      request = host.getRequest();
    const user = request['user'];
    const allowed = this.isAllow(user.roles);
    if (!allowed) {
      throw new ForbiddenException();
    }
    return true;
  }
  isAllow(userRoles: string[]) {
    let allowed = false;
    userRoles.forEach((userRole) => {
      if (!allowed && this.allowRoles.includes(userRole)) {
        allowed = true;
      }
    });
    return allowed;
  }
}
