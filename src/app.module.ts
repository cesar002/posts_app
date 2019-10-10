import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseconnectorModule } from './databaseconnector/databaseconnector.module';
import { VistasModule } from './modules/vistas/vistas.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [DatabaseconnectorModule, VistasModule, AuthModule],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
