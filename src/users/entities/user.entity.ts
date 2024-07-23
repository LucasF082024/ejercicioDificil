import { Curso } from 'src/ejemplo/entities/ejemplo.entity';
import { PersonalInformation } from 'src/personal_information/entities/personal_information.entity';
import { Role } from 'src/roles/entities/role.entity';
import { UserCurso } from 'src/user_curso/entities/user_curso.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('int', { nullable: true })
  age: Number;

  // @CreateDateColumn()
  // created_at: Date;

  // @DeleteDateColumn()
  // deleted_at: Date;

  @ManyToOne(() => Role, (role) => role.user)
  role: Role;

  @OneToMany(() => UserCurso, (userCurso) => userCurso.user)
  curso: UserCurso[];
}
