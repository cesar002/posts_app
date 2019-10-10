import  {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'

import { Post } from './posts.entity'
import { Comentario } from './comentarios.entity'
import { LikesComentarios } from './likesComentarios.entity'


@Entity('usuarios')
export class Usuario{
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({length: 45, unique: true})
    username: string;

    @Column({length: 100})
    password: string;

    @OneToMany(type => Post, post => post.user)
    posts: Post[];

    @OneToMany(type => Comentario, comentario => comentario.user)
    comentarios: Comentario[]

    @OneToMany(type => LikesComentarios, likes => likes.user)
    likes: LikesComentarios[]

}