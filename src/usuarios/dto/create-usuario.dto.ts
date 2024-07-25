import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Lenguaje } from 'src/lenguajes/entities/lenguaje.entity';
import { Rol } from 'src/rol/entities/rol.entity';
class dto {
  lenguaje: Lenguaje;
}
export class CreateUsuarioDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsNumber()
  dni: number;

  @IsNumber()
  rol: Rol;

  @ValidateNested()
  @IsArray()
  lenguajes: dto[];
}
