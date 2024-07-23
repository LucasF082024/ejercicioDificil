import { Test, TestingModule } from '@nestjs/testing';
import { UserCursoController } from './user_curso.controller';
import { UserCursoService } from './user_curso.service';

describe('UserCursoController', () => {
  let controller: UserCursoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCursoController],
      providers: [UserCursoService],
    }).compile();

    controller = module.get<UserCursoController>(UserCursoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
