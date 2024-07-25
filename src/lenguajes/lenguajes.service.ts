import { Injectable } from '@nestjs/common';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lenguaje } from './entities/lenguaje.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LenguajesService {
  constructor(
    @InjectRepository(Lenguaje)
    private readonly lenguajeRepository: Repository<Lenguaje>,
  ) {}
  create(createLenguajeDto: CreateLenguajeDto) {
    return this.lenguajeRepository.save(createLenguajeDto);
  }

  findAll() {
    return this.lenguajeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} lenguaje`;
  }

  update(id: number, updateLenguajeDto: UpdateLenguajeDto) {
    return `This action updates a #${id} lenguaje`;
  }

  remove(id: number) {
    return `This action removes a #${id} lenguaje`;
  }
}
