import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-users.dto';
import { EditUserDTO } from './dto/edit-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.usersService.getUsers();
    return users;
  }

  @Get(':id')
  async getUserById(@Param('id') id) {
    const user = await this.usersService.getUserByID(parseInt(id));
    return user;
  }

  @Post()
    async createUser(@Body() createUserDTO: CreateUserDTO) {
        const user = await this.usersService.createUser(createUserDTO);
        return user;
    }
    @Put(':id')
    async editUser(@Param('id') id, @Body() editUserDTO: EditUserDTO) {
        const user = await this.usersService.editUser(parseInt(id), editUserDTO);
        return user;
    }

    @Delete(':id')
    async deleteUser(@Param('id') id) {
        const user = await this.usersService.deleteUser(parseInt(id));
        return user;
    }
}
