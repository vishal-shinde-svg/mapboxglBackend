import { Module } from '@nestjs/common';
import { MapgService } from './mapg.service';
import { MapgController } from './mapg.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mapg } from './entities/mapg.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mapg])],
  controllers: [MapgController],
  providers: [MapgService],
})
export class MapgModule {}
