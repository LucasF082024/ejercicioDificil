import { Auto } from 'src/autos/entities/auto.entity';
import { Lenguaje } from 'src/lenguajes/entities/lenguaje.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { Ubicacion } from 'src/ubicaciones/entities/ubicacion.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  nombre: string;

  @Column('text')
  apellido: string;

  @Column('int')
  dni: Number;

  @ManyToOne(() => Rol)
  rol: Rol;

  @OneToMany(() => Auto, (auto) => auto.usuarioId)
  autos: Auto[];

  @OneToMany(() => Ubicacion, (ubi) => ubi.usuarioId)
  ubicacion: Ubicacion;

  @ManyToMany(() => Lenguaje)
  @JoinTable()
  lenguajes: Lenguaje[];
}
