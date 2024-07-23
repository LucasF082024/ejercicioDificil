import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Periodo } from '../../periodo/entities/periodo.entity';
import { User } from '../../users/entities/user.entity';

@Entity('curso')
export class Curso {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  descripcion: string;

  @ManyToOne(() => Periodo)
  periodo: Periodo;
  // @Column

  // @Column('text')
  // profesor: string;

  @OneToMany(() => User, (user) => user.curso)
  user: User[];
}
