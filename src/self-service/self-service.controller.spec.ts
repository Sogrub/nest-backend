import { Test, TestingModule } from '@nestjs/testing';
import { SelfServiceController } from './self-service.controller';
import { SelfServiceService } from './self-service.service';

describe('SelfServiceController', () => {
  let controller: SelfServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SelfServiceController],
      providers: [SelfServiceService],
    }).compile();

    controller = module.get<SelfServiceController>(SelfServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
