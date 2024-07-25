import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORM } from './config/typeORM';
import { RolesModule } from './roles/roles.module';
import { PersonalInformationModule } from './personal_information/personal_information.module';
import { EjemploModule } from './ejemplo/ejemplo.module';
import { PeriodoModule } from './periodo/periodo.module';
import { UserCursoModule } from './user_curso/user_curso.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AutosModule } from './autos/autos.module';
import { RolModule } from './rol/rol.module';
import { UbicacionesModule } from './ubicaciones/ubicaciones.module';
import { LenguajesModule } from './lenguajes/lenguajes.module';
@Module({
  imports: [TypeOrmModule.forRoot(typeORM()), UsersModule, RolesModule, PersonalInformationModule, EjemploModule, PeriodoModule, UserCursoModule, UsuariosModule, AutosModule, RolModule, UbicacionesModule, LenguajesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
