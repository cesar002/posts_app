import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { LikesComentarios } from '../../database/models/likesComentarios.entity'
import { Comentario } from 'src/database/models/comentarios.entity';
import { Usuario } from 'src/database/models/usuarios.entity';

@Injectable()
export class LikesService {

    constructor(
        @InjectRepository(LikesComentarios)
        private readonly likesRepository : Repository <LikesComentarios> ,
    ){}


    public async getLikesComentario(comentario : Comentario) : Promise<any> {
        return await this.likesRepository.find({where: {comentario}})
    }


    public async agregarLike(comentario : Comentario, user : Usuario) : Promise<any> {
        let likes = new LikesComentarios()
        likes.likes = 1;
        likes.comentario = comentario;
        likes.user = user;

        return await this.likesRepository.save(likes)
    }


}
