import { Injectable } from '@nestjs/common';
import { CreateEjemploDto } from './dto/create-ejemplo.dto';
import { UpdateEjemploDto } from './dto/update-ejemplo.dto';
import { Curso } from './entities/ejemplo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EjemploService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
  ) {}

  create(createEjemploDto: CreateEjemploDto) {
    return this.cursoRepository.save(createEjemploDto);
  }

  findAll() {
    return this.cursoRepository.find({
      relations: { periodo: true, user: true },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} ejemplo`;
  }

  update(id: number, updateEjemploDto: UpdateEjemploDto) {
    return `This action updates a #${id} ejemplo`;
  }

  remove(id: number) {
    return `This action removes a #${id} ejemplo`;
  }
}
