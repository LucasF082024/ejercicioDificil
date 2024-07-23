import { Rol } from 'src/rol/entities/rol.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
}
