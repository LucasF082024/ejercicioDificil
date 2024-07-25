import { Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auto } from './entities/auto.entity';
import { Repository } from 'typeorm';
import { Lenguaje } from 'src/lenguajes/entities/lenguaje.entity';

@Injectable()
export class AutosService {
  constructor(
    @InjectRepository(Auto)
    private readonly autoRepository: Repository<Auto>,
  ) {}

  create(createAutoDto: CreateAutoDto) {
    return this.autoRepository.save(createAutoDto);
  }

  async findAll() {
    return await this.autoRepository.find({
      loadRelationIds: true,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} auto`;
  }

  update(id: number, updateAutoDto: UpdateAutoDto) {
    return `This action updates a #${id} auto`;
  }

  remove(id: number) {
    return `This action removes a #${id} auto`;
  }
}
