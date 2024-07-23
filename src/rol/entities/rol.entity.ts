import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rol')
export class Rol {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  descripcion: string;

  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  usuario: Usuario;
}
