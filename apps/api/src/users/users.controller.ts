import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'Users list';
  }

  @Get(':id')
  findOne(@Param() params) {
    return `User with id ${params.id}`;
  }
}
