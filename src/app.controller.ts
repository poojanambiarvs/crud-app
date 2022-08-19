import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { Promise } from 'mongoose';
import { AppService } from './app.service';
import { User } from './user.module';
import { UserUpdateDto } from './userUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDto:User){
    return this.appService.createUser(userDto)
  }

  @Get()
  readUser()
  {
    return this.appService.readUser()
  }

  @Put(':id')
  async updateUser(
    @Param('id') id:string , @Body()updateData:UserUpdateDto
    ):Promise <User>{
    return this.appService.updateUser(id,updateData) 
  }

  @Delete(':id')
  async deleteUser(@Param('id') id:string){
    return this.appService.deleteUser(id)
  }
}
