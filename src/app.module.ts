import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseconnectorModule } from './databaseconnector/databaseconnector.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module'
import { PostsModule } from './modules/posts/posts.module'

@Module({
  imports: [DatabaseconnectorModule, AuthModule, UsuariosModule, PostsModule],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
