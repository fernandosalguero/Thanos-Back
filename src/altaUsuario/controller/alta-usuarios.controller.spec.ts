import { Test, TestingModule } from '@nestjs/testing';
import { AltaUsuariosController } from './alta-usuarios.controller';

describe('AltaUsuariosController', () => {
  let controller: AltaUsuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AltaUsuariosController],
    }).compile();

    controller = module.get<AltaUsuariosController>(AltaUsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
