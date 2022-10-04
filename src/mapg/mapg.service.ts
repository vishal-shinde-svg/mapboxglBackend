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

  findOne(id: number) {
    return this.MapgRepository.findOneBy({ id });
  }

  updateAll(id: number, createMapgDto: CreateMapgDto) {
    return this.update(id, createMapgDto);
  }

  update(id: number, updatMapgDto: UpdateMapgDto) {
    // let stud: student_m = new student_m();
    // stud.FirstName = updateStudentDto.FirstName;
    // stud.LastName = updateStudentDto.LastName;
    // stud.Gender = updateStudentDto.Gender;
    // stud.Student_Email = updateStudentDto.Student_Email;
    // stud.Student_Add = updateStudentDto.Student_Add;
    // stud.id = id;
    // return this.studentRepository.save(stud);
    return this.MapgRepository.update(id, updatMapgDto);
  }

  remove(id: string) {
    return this.MapgRepository.delete(id);
  }
}
