import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from 'typeorm'

import {  Usuario } from './usuarios.entity'
import { Post } from './posts.entity'
import { LikesComentarios } from './likesComentarios.entity'

@Entity('comentarios')
export class Comentario{
    @PrimaryGeneratedColumn()
    id_comentario: number;

    @Column('text')
    comentario: string;

    @Column('datetime')
    fecha_publicacion: Date;

    @ManyToOne(type => Usuario, user => user.comentarios)
    @JoinColumn({name: 'id_usuario'})
    user: Usuario

    @ManyToOne(type => Post, post => post.comentarios)
    @JoinColumn({name: 'id_post'})
    post: Post;

    @ManyToOne(type => Comentario, comentario => comentario.comentarios_reply,{
        nullable: true,
    })
    @JoinColumn({name: 'id_comentario_padre'})
    comentario_padre: Comentario;
    
    @OneToMany(type => Comentario, comentario => comentario.comentario_padre)
    comentarios_reply: Comentario[];

    @OneToMany(type => LikesComentarios, likes => likes.comentario)
    likes: LikesComentarios[];


}