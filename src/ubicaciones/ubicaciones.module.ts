import { Module } from '@nestjs/common';
import { UbicacionesService } from './ubicaciones.service';
import { UbicacionesController } from './ubicaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Ubicacion } from './entities/ubicacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ubicacion])],
  controllers: [UbicacionesController],
  providers: [UbicacionesService],
})
export class UbicacionesModule {}
