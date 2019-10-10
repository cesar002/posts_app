import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm'

import { Usuario } from './usuarios.entity'
import { Comentario } from './comentarios.entity'

@Entity('likes_comentarios')
export class LikesComentarios{
    @PrimaryGeneratedColumn()
    id_like_comentario: number;

    @ManyToOne(type => Usuario, user => user.likes)
    @JoinColumn({name: 'id_usuario'})
    user: Usuario;

    @ManyToOne(type => Comentario, comentario => comentario.likes)
    @JoinColumn({name: 'id_comentario'})
    comentario: Comentario;

    @Column({type: 'bigint'})
    likes: number;
}