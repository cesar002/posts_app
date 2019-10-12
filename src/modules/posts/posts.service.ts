import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Post } from '../../database/models/posts.entity'
import { Usuario } from '../../database/models/usuarios.entity'
import { PostInterface } from './posts.interface'


@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository : Repository<Post>
    ){}

    
    async crearPost(newPost : PostInterface, user : Usuario) : Promise<any>{
        let post = new Post();

        post.titulo = newPost.titulo;
        post.contenido = newPost.contenido;
        post.fecha_creacion = new Date();
        post.user = user;

        this.postRepository.save(post)
    }

    async obtenerPosts() : Promise<any>{
        return await this.postRepository.find();
    }


}
