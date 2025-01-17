import { IsNumber, IsString } from 'class-validator';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

export class CreateAutoDto {
  @IsString()
  modelo: string;

  @IsString()
  marca: string;

  @IsString()
  color: string;

  @IsString()
  patente: string;

  @IsNumber()
  usuarioId: Usuario;
}
