import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LoginGuard extends AuthGuard('local'){
    
    async canActivate(context: ExecutionContext) {
        let result = (await super.canActivate(context)) as boolean;

        let request = context.switchToHttp().getRequest();

        await super.logIn(request);
        return result;
    }
}