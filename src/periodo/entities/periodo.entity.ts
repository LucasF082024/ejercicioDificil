import { Curso } from 'src/ejemplo/entities/ejemplo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('periodo')
export class Periodo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int')
  periodo: number;

  @OneToMany(()=>Curso, curso=>curso.periodo)
  curso: Curso[]
  
}
