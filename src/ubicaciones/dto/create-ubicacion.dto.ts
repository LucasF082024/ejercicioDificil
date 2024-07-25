import { IsNumber, IsString } from 'class-validator';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

export class CreateUbicacionDto {
  @IsString()
  pais: string;

  @IsString()
  provincia: string;

  @IsString()
  localidad: string;

  @IsString()
  calle: string;

  @IsString()
  altura: string;

  @IsNumber()
  usuarioId: Usuario;
}
