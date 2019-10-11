import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Usuario } from '../../database/models/usuarios.entity'
import { UsuariosController } from './usuarios.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuariosController,],
  providers: [UsuariosService,],
  exports: [UsuariosService,]
})
export class UsuariosModule {}
