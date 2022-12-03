import { Test, TestingModule } from '@nestjs/testing';
import { Demo1/cat/dataAcService } from './demo1/cat/data-ac.service';

describe('Demo1/cat/dataAcService', () => {
  let service: Demo1/cat/dataAcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Demo1/cat/dataAcService],
    }).compile();

    service = module.get<Demo1/cat/dataAcService>(Demo1/cat/dataAcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
