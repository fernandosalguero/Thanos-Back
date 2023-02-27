import { Test, TestingModule } from '@nestjs/testing';
import { InfopersonalController } from './infopersonal.controller';

describe('InfopersonalController', () => {
  let controller: InfopersonalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfopersonalController],
    }).compile();

    controller = module.get<InfopersonalController>(InfopersonalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
