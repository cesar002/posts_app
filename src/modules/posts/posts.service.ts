import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Post } from '../../database/models/posts.entity'
import { Usuario } from '../../database/models/usuarios.entity'
import { Comentario } from '../../database/models/comentarios.entity';

import { ComentariosService } from '../comentarios/comentarios.service';

import { PostInterface } from './posts.interface'


@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository : Repository<Post>,
        @InjectRepository(Comentario)
        private readonly comentariosRepository : Repository<Comentario>
    ){}

    
    public async crearPost(newPost : PostInterface, user : Usuario) : Promise<any>{
        let post = new Post();

        post.titulo = newPost.titulo;
        post.contenido = newPost.contenido;
        post.fecha_creacion = new Date();
        post.user = user;

        this.postRepository.save(post)
    }

    public async obtenerPosts() : Promise<any>{
        let posts = await this.postRepository.find({relations: ['user']});
        let postsConstruidos : PostInterface[] = []
        posts.forEach(post => {
            let user : Usuario = post.user
            postsConstruidos.push({
                idPost: post.id_post,
                titulo: post.titulo,
                contenido: post.contenido,
                contenidoResumen: this.convertirComentarioAResumen(post.contenido) + '...',
                usuarioCreacion: user.username
            })
        })

        return postsConstruidos
    }

    public async verPost(id:number) : Promise<any>{
        let post = await this.postRepository.findOne(id, {relations: ['user']})
        let comentarios = await this.comentariosRepository.find({where:{post, comentario_padre: null}, relations: ['user', 'comentarios_reply', 'likes']})
        post.comentarios = comentarios
        return post
    }

    private convertirComentarioAResumen(contenido : string) : string{
        let sizeContenido = contenido.length - 1
        let newSize =   Math.round(((45 * sizeContenido) / 100))

        let resumen = contenido.substring(0, newSize).split('\n').join('')
        return resumen
    }


}
