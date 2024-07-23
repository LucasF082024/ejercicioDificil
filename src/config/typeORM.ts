import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORM = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Bootcamp082024',
    database: 'ejercicio',
    entities: ['dist/**/*.entity.{ts,js}'],
    synchronize: true,
    // logging: true,
  };
};
