import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseconnectorModule } from './databaseconnector/databaseconnector.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module'
import { PostsModule } from './modules/posts/posts.module'
import { ComentariosModule } from './modules/comentarios/comentarios.module';

@Module({
  imports: [DatabaseconnectorModule, AuthModule, UsuariosModule, PostsModule, ComentariosModule],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
