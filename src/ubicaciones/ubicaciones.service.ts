import { Injectable } from '@nestjs/common';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ubicacion } from './entities/ubicacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UbicacionesService {
  constructor(
    @InjectRepository(Ubicacion)
    private readonly ubicacionRepository: Repository<Ubicacion>,
  ) {}
  create(createUbicacionDto: CreateUbicacionDto) {
    return this.ubicacionRepository.save(createUbicacionDto);
  }

  findAll() {
    return this.ubicacionRepository.find({
      loadRelationIds: true,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} ubicacione`;
  }

  update(id: number, updateUbicacionDto: UpdateUbicacionDto) {
    return `This action updates a #${id} ubicacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} ubicacione`;
  }
}
