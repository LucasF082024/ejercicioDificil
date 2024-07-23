import { IsInt, IsUUID } from 'class-validator';
import { Curso } from 'src/ejemplo/entities/ejemplo.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateUserCursoDto {
  @IsInt()
  curso: Curso;

  @IsUUID()
  user: User;
}
