import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMapgDto } from './dto/create-mapg.dto';
import { UpdateMapgDto } from './dto/update-mapg.dto';
import { Mapg } from './entities/mapg.entity';

@Injectable()
export class MapgService {
  constructor(
    @InjectRepository(Mapg) private readonly MapgRepository: Repository<Mapg>,
  ) {}
  create(createMapgDto: CreateMapgDto): Promise<Mapg> {
    return this.MapgRepository.save(createMapgDto);
  }

  findAll(): Promise<Mapg[]> {
    return this.MapgRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} mapg`;
  // }

  // update(id: number, updateMapgDto: UpdateMapgDto) {
  //   return `This action updates a #${id} mapg`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} mapg`;
  // }
}
