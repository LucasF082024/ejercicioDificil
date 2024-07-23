import { IsEmail, IsInt, IsOptional, IsString, IsUUID } from 'class-validator';
import { Role } from 'src/roles/entities/role.entity';
import { Curso } from '../../ejemplo/entities/ejemplo.entity';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsUUID()
  role: Role;
}
