import { Test, TestingModule } from '@nestjs/testing';
import { AltaUsuarioService } from './alta-usuario.service';

describe('AltaUsuarioService', () => {
  let service: AltaUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AltaUsuarioService],
    }).compile();

    service = module.get<AltaUsuarioService>(AltaUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
