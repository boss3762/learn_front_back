import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Delete,
  } from '@nestjs/common';
  import { DeleteResult, UpdateResult } from 'typeorm';
  import { AddressInfo } from '../models/address.interface';
  import { AddressService } from '../services/address.service';

@Controller('addresses')
export class AddressController {
    constructor(private addressService: AddressService) { }

    @Post()
    async create(@Body() AddressInfo: AddressInfo): Promise<AddressInfo> {
        return await this.addressService.createPost(AddressInfo);
    }
    @Get()
    async findAll(): Promise<AddressInfo[]> {
        return await this.addressService.findAllPosts();
    }
    @Patch(':id')
    async update(
        @Param('id') id: number,
        @Body() AddressInfo: AddressInfo,
    ): Promise<UpdateResult> {
        return await this.addressService.updatePost(id, AddressInfo);
    }
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<DeleteResult> {
        return await this.addressService.deletePost(id);
    }
}

