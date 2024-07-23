import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}
  findAll() {
    return this.roleRepository.find();
  }
  create(createRoleDto: CreateRoleDto) {
    return this.roleRepository.save(createRoleDto);
  }

  findOne(id: string) {
    return this.roleRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.roleRepository.update({ id: id }, updateRoleDto);
  }

  remove(id: string) {
    return this.roleRepository.delete({ id: id });
  }
}
