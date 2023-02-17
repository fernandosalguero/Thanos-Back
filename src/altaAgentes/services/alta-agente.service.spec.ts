import { Test, TestingModule } from '@nestjs/testing';
import { AltaAgenteService } from './alta-agente.service';

describe('AltaAgenteService', () => {
  let service: AltaAgenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AltaAgenteService],
    }).compile();

    service = module.get<AltaAgenteService>(AltaAgenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
