import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Comentario } from '../../database/models/comentarios.entity';
import { Post } from '../../database/models/posts.entity';
import { Usuario } from '../../database/models/usuarios.entity';

@Injectable()
export class ComentariosService {
    constructor(
        @InjectRepository(Comentario)
        private readonly comentarioRepository : Repository <Comentario>,
        @InjectRepository(Post)
        private readonly postRepository : Repository <Post>
    ){}

    public async agregarComentario(comment : string, idPost : number, user : Usuario) : Promise <any>{
        let post = await this.postRepository.findOne(idPost)

        if(!post){
            return null
        }

        let comentario = new Comentario()
        comentario.comentario = comment;
        comentario.fecha_publicacion = new Date();
        comentario.user = user;
        comentario.post = post;
        comentario.comentario_padre = null;        

        return await this.comentarioRepository.save(comentario)
    }

    public async obtenerSubComentarios(comentarioPadre : Comentario) : Promise<any>{
        let replies = await this.postRepository.find(comentarioPadre);
        return replies
    }

}
