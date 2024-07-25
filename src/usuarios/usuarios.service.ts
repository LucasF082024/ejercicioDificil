import { Injectable } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from 'src/rol/entities/rol.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Lenguaje } from 'src/lenguajes/entities/lenguaje.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    const lenguajes = new Lenguaje();
    lenguajes.id = createUsuarioDto.lenguajes[0] as any;
    return this.usuarioRepository.save({
      ...createUsuarioDto,
      lenguajes: [lenguajes],
    });
  }

  async findAll() {
    const data = await this.usuarioRepository.find({
      relations: { autos: true },
    });
    return { data: data };
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
