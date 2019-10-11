import { Injectable } from '@nestjs/common';

import { UsuarioInterface } from '../usuarios/usuario.interface'
import { UsuariosService } from '../usuarios/usuarios.service'
import { Usuario } from '../../database/models/usuarios.entity'

@Injectable()
export class AuthService {
    constructor(
        private readonly userService : UsuariosService
    ){}


    async verificarUsuario(username : string, pass : string) : Promise<any>{
        let user : Usuario = await this.userService.getUser(username)
        if(user && user.password === pass){
            return  user
        }

        return null;
    }

}
