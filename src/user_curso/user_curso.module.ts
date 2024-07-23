import { Module } from '@nestjs/common';
import { UserCursoService } from './user_curso.service';
import { UserCursoController } from './user_curso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCurso } from './entities/user_curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserCurso])],
  controllers: [UserCursoController],
  providers: [UserCursoService],
})
export class UserCursoModule {}
