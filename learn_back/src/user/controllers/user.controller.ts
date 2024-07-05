import { Controller } from '@nestjs/common';
import {
    Body,
    Get,
    Param,
    Patch,
    Post,
    Delete,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserInfo } from '../models/user.interface';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async create(@Body() UserInfo: UserInfo): Promise<UserInfo> {
        return await this.userService.createPost(UserInfo);
    }
    @Get()
    async findAll(): Promise<UserInfo[]> {
        return await this.userService.findAllPosts();
    }
    @Patch(':id')
    async update(
        @Param('id') id: number,
        @Body() UserInfo: UserInfo,
    ): Promise<UpdateResult> {
        return await this.userService.updatePost(id, UserInfo);
    }
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<DeleteResult> {
        return await this.userService.deletePost(id);
    }
}
