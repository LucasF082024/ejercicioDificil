import { Test, TestingModule } from '@nestjs/testing';
import { UserCursoService } from './user_curso.service';

describe('UserCursoService', () => {
  let service: UserCursoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCursoService],
    }).compile();

    service = module.get<UserCursoService>(UserCursoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
