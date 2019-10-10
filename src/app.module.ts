import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistroModule } from './modules/registro/registro.module';
import { PostsModule } from './modules/posts/posts.module';
import { ComentariosModule } from './modules/comentarios/comentarios.module';

@Module({
  imports: [RegistroModule, PostsModule, ComentariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
