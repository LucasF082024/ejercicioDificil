import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('autos')
export class Auto {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  modelo: string;

  @Column('text')
  marca: string;

  @Column('text')
  color: string;

  @Column('text')
  patente: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.autos)
  usuarioId: Usuario;
}
