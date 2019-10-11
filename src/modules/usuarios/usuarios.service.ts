import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'


import {Usuario} from '../../database/models/usuarios.entity'

@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository : Repository<Usuario>
    ){}


    async getUser(username : string) : Promise<any>{
        let user : Usuario = await this.usuarioRepository.findOne({username: username})
        return user;
    }

    async registrarUser(username : string, password : string) : Promise<any>{
        try{
            let usuario = new Usuario();
            usuario.username = username;
            usuario.password = password;
    
            return this.usuarioRepository.save(usuario)
        }catch(err){
            return null;
        }
        
    }

}
