import { Test, TestingModule } from '@nestjs/testing';
import { MapgService } from './mapg.service';

describe('MapgService', () => {
  let service: MapgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapgService],
    }).compile();

    service = module.get<MapgService>(MapgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
