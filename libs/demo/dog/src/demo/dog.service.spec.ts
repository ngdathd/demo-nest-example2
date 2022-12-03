import { Test, TestingModule } from '@nestjs/testing';
import { Demo/dogService } from './demo/dog.service';

describe('Demo/dogService', () => {
  let service: Demo/dogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Demo/dogService],
    }).compile();

    service = module.get<Demo/dogService>(Demo/dogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
