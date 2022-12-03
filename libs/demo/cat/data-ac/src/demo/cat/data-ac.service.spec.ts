import { Test, TestingModule } from '@nestjs/testing';
import { Demo/cat/dataAcService } from './demo/cat/data-ac.service';

describe('Demo/cat/dataAcService', () => {
  let service: Demo/cat/dataAcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Demo/cat/dataAcService],
    }).compile();

    service = module.get<Demo/cat/dataAcService>(Demo/cat/dataAcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
