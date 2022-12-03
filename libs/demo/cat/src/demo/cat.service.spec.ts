import { Test, TestingModule } from '@nestjs/testing';
import { Demo/catService } from './demo/cat.service';

describe('Demo/catService', () => {
  let service: Demo/catService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Demo/catService],
    }).compile();

    service = module.get<Demo/catService>(Demo/catService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
