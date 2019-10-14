import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ComentariosService } from '../comentarios/comentarios.service';

import { Comentario } from '../../database/models/comentarios.entity';
import { Post } from '../../database/models/posts.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Post, Comentario])],
  controllers: [PostsController],
  providers: [PostsService, ComentariosService],
  exports: [PostsService],
})
export class PostsModule {}
