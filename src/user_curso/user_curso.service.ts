import { Injectable } from '@nestjs/common';
import { CreateUserCursoDto } from './dto/create-user_curso.dto';
import { UpdateUserCursoDto } from './dto/update-user_curso.dto';
import { Repository } from 'typeorm';
import { UserCurso } from './entities/user_curso.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserCursoService {
  constructor(
    @InjectRepository(UserCurso)
    private readonly userCursoService: Repository<UserCurso>,
  ) {}
  create(createUserCursoDto: CreateUserCursoDto) {
    return this.userCursoService.save(createUserCursoDto);
  }

  findAll() {
    return `This action returns all userCurso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userCurso`;
  }

  update(id: number, updateUserCursoDto: UpdateUserCursoDto) {
    return `This action updates a #${id} userCurso`;
  }

  remove(id: number) {
    return `This action removes a #${id} userCurso`;
  }
}
