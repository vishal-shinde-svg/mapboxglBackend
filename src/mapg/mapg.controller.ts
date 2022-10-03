import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MapgService } from './mapg.service';
import { CreateMapgDto } from './dto/create-mapg.dto';
import { UpdateMapgDto } from './dto/update-mapg.dto';
import { Mapg } from './entities/mapg.entity';

@Controller('mapg')
export class MapgController {
  constructor(private readonly mapgService: MapgService) {}

  @Post()
  create(@Body() createMapgDto: CreateMapgDto): Promise<Mapg> {
    console.log('hii' + createMapgDto);

    return this.mapgService.create(createMapgDto);
  }

  @Get()
  findAll() {
    return this.mapgService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.mapgService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMapgDto: UpdateMapgDto) {
  //   return this.mapgService.update(+id, updateMapgDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.mapgService.remove(+id);
  // }
}
