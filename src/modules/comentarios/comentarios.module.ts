import { Module } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { PostsService } from '../posts/posts.service'
import { ComentariosController } from './comentarios.controller';
import {TypeOrmModule} from '@nestjs/typeorm'

import { Comentario } from '../../database/models/comentarios.entity';
import { Post } from '../../database/models/posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario, Post])],
  providers: [ComentariosService, PostsService,],
  controllers: [ComentariosController],
  exports: [ComentariosService],
})
export class ComentariosModule {}
