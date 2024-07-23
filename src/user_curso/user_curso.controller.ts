import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCursoService } from './user_curso.service';
import { CreateUserCursoDto } from './dto/create-user_curso.dto';
import { UpdateUserCursoDto } from './dto/update-user_curso.dto';

@Controller('user-curso')
export class UserCursoController {
  constructor(private readonly userCursoService: UserCursoService) {}

  @Post()
  create(@Body() createUserCursoDto: CreateUserCursoDto) {
    return this.userCursoService.create(createUserCursoDto);
  }

  @Get()
  findAll() {
    return this.userCursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCursoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserCursoDto: UpdateUserCursoDto) {
    return this.userCursoService.update(+id, updateUserCursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCursoService.remove(+id);
  }
}
