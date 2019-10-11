import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from './auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(private readonly authService : AuthService){
        super();
    }

    async validate(username : string, password : string){
        let user = await this.authService.verificarUsuario(username, password)

        if(!user){
            throw new UnauthorizedException();
        }

        return user;
    }


}