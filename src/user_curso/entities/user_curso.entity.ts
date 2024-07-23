import { Curso } from 'src/ejemplo/entities/ejemplo.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('user_curso')
export class UserCurso {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Curso)
  curso: Curso;

  @ManyToOne(() => User)
  user: User;
}
