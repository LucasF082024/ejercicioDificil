import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MoreThan, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from 'src/roles/entities/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly rolecitoRepository: Repository<Role>,
  ) {}

  async findAll() {
    const data = await this.userRepository.find({
      // where: { age: MoreThan(18) },
      relations: { curso: { curso: true } },
      order: { curso: { id: 'ASC' } },
    });
    return { data: data };
    return this.userRepository.find({ relations: { role: true } });
  }
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findOne(id: string) {
    return this.userRepository.findOne({
      where: { id: id },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id: id }, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete({ id: id });
  }
}
