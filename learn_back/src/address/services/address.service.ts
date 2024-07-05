import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { AddressEntity } from '../models/address.entity';
import { AddressInfo } from '../models/address.interface';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressInfoRepository: Repository<AddressEntity>,
      ) {}

      async createPost(addressInfo: AddressInfo): Promise<AddressInfo> {
        return await this.addressInfoRepository.save(addressInfo);
      }
      
      async findAllPosts(): Promise<AddressInfo[]> {
        return await this.addressInfoRepository.find();
      }
      
      async updatePost(
        id: number,
        addressInfo: AddressInfo,
      ): Promise<UpdateResult> {
        return await this.addressInfoRepository.update(id, addressInfo);
      }
      
      async deletePost(id: number): Promise<DeleteResult> {
        return await this.addressInfoRepository.delete(id);
      }
}
