import { Controller,Post,Body,Get,Param,Put,Delete } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from './user.dto';
@Controller('user')
export class UserController {
constructor(private readonly service: PrismaService) {}

@Post()
async createUser(@Body() { name, email }: UserDto): Promise<UserDto> {
    const createdUser = await this.service.user.create({
    data: {
      name,
      email,
    }});
    return createdUser;
}

@Get()
  async findAllUser(): Promise<UserDto[]> {
    const allUsers = await this.service.user.findMany();
    return allUsers;
}

@Put(':id') 
async updateUser(@Param('id') id: string, @Body() { name, email }: UserDto): Promise<UserDto> {
  const updatedUser = await this.service.user.update({
    where: {
      id: parseInt(id), 
    },
    data: {
      name,
      email,
    },
  });
  return updatedUser;
}

@Delete(':id') 
async deleteUser(@Param('id') id: string): Promise<void> {
  await this.service.user.delete({
    where: {
      id: parseInt(id)
    }
  });
}
}
