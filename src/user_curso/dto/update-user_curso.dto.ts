import { PartialType } from '@nestjs/mapped-types';
import { CreateUserCursoDto } from './create-user_curso.dto';

export class UpdateUserCursoDto extends PartialType(CreateUserCursoDto) {}
