import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ubicaciones')
export class Ubicacion {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  pais: string;

  @Column('text')
  provincia: string;

  @Column('text')
  localidad: string;

  @Column('text')
  calle: string;

  @Column('text')
  altura: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.autos)
  usuarioId: Usuario;
}
