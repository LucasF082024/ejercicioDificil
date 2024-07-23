import { IsNumber, IsString } from 'class-validator';
import { Rol } from 'src/rol/entities/rol.entity';

export class CreateUsuarioDto {
  @IsString()
  nombre: String;

  @IsString()
  apellido: String;

  @IsNumber()
  dni: Number;

  @IsNumber()
  rol: Rol;
}
