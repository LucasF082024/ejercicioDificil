import { Module } from '@nestjs/common';
import { LenguajesService } from './lenguajes.service';
import { LenguajesController } from './lenguajes.controller';
import { Lenguaje } from './entities/lenguaje.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Lenguaje])],

  controllers: [LenguajesController],
  providers: [LenguajesService],
})
export class LenguajesModule {}
