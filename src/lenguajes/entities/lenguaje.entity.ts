import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lenguajes')
export class Lenguaje {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  descripcion: string;
}
