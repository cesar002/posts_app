import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm'

import { Post } from './posts.entity'

@Entity('likes_post')
export class LikesPost{
    @PrimaryGeneratedColumn()
    id_like: number;

    @ManyToOne(type => Post, post => post.likes)
    @JoinColumn({name:'id_post'})
    post: Post;

    @Column({type: 'bigint'})
    likes: number;

}