import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { UserInfo } from '../models/user.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userInfoRepository: Repository<UserEntity>,
      ) {}
    
      async createPost(userInfo: UserInfo): Promise<UserInfo> {
        return await this.userInfoRepository.save(userInfo);
      }
      
      async findAllPosts(): Promise<UserInfo[]> {
        return await this.userInfoRepository.find();
      }

      async updatePost(
        id: number,
        userInfo: UserInfo,
      ): Promise<UpdateResult> {
        return await this.userInfoRepository.update(id, userInfo);
      }
      // support เส้น delete
      async deletePost(id: number): Promise<DeleteResult> {
        return await this.userInfoRepository.delete(id);
      }
}
