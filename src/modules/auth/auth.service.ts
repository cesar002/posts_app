import { Injectable } from '@nestjs/common';
import { Usuario } from '../../database/models/usuarios.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository : Repository<Usuario>
    ){}


    async verificarUsuario(username : string, pass : string) : Promise<any>{
        let user : Usuario = await this.usuarioRepository.findOne({username: username})
        if(user && user.password === pass){
            
        }
    }

}
