import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate{

    async canActivate(context: ExecutionContext){
        let request = context.switchToHttp().getRequest();

        return request.isAuthenticated();
    }

}