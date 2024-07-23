import { Module } from '@nestjs/common';
import { EjemploService } from './ejemplo.service';
import { EjemploController } from './ejemplo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './entities/ejemplo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  controllers: [EjemploController],
  providers: [EjemploService],
})
export class EjemploModule {}
