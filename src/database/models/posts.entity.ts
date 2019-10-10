import  {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from 'typeorm';

import { Usuario } from './usuarios.entity'
import { Comentario } from './comentarios.entity'
import { LikesPost } from './likesPost.entity'

@Entity('posts')
export class Post{
    @PrimaryGeneratedColumn()
    id_post: number;

    @Column({length: 45})
    titulo: string;

    @Column('text')
    contenido: string;

    @Column({type: 'datetime'})
    fecha_creacion: Date;

    @ManyToOne(type => Usuario, user => user.posts)
    @JoinColumn({name: 'id_usuario'})
    user: Usuario

    @OneToMany(type => Comentario, comentario => comentario.post)
    comentarios: Comentario[];

    @OneToMany(type => LikesPost, likes => likes.post)
    likes: LikesPost[]

}