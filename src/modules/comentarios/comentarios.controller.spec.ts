import { Test, TestingModule } from '@nestjs/testing';
import { ComentariosController } from './comentarios.controller';

describe('Comentarios Controller', () => {
  let controller: ComentariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComentariosController],
    }).compile();

    controller = module.get<ComentariosController>(ComentariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
