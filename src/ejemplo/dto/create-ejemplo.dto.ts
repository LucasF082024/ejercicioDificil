import { IsString } from 'class-validator';
import { Column } from 'typeorm';

export class CreateEjemploDto {
  @IsString()
  descripcion: string;

  //   periodo: Periodo;
}
