import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { Comentario } from '../database/models/comentarios.entity'
import { LikesComentarios } from '../database/models/likesComentarios.entity'
import { LikesPost } from '../database/models/likesPost.entity'
import { Post } from '../database/models/posts.entity'
import { Usuario } from '../database/models/usuarios.entity'

@Module({
    imports:[
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',//password: '',
            database: 'postin_comentarios',
            entities: ['src/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([
            Comentario,
            LikesComentarios,
            LikesPost,
            Post,
            Usuario
        ]),
    ]
})
export class DatabaseconnectorModule {}
