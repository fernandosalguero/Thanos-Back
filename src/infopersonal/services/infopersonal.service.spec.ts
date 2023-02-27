import { Test, TestingModule } from '@nestjs/testing';
import { InfopersonalService } from './infopersonal.service';

describe('InfopersonalService', () => {
  let service: InfopersonalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfopersonalService],
    }).compile();

    service = module.get<InfopersonalService>(InfopersonalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
