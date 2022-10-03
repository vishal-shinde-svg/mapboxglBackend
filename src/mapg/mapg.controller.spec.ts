import { Test, TestingModule } from '@nestjs/testing';
import { MapgController } from './mapg.controller';
import { MapgService } from './mapg.service';

describe('MapgController', () => {
  let controller: MapgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapgController],
      providers: [MapgService],
    }).compile();

    controller = module.get<MapgController>(MapgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
