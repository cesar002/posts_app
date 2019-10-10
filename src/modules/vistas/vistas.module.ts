import { Module } from '@nestjs/common';
import { VistasController } from './vistas.controller';

@Module({
  controllers: [VistasController]
})
export class VistasModule {}
