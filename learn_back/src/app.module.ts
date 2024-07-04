import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { User } from './Entity/User.entity';
import { Address } from './Entity/Address.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_host'),
        port: +configService.get('DB_port'),
        username: configService.get('DB_username'),
        password: configService.get('DB_password'),
        database: configService.get('DB_database'),
        entities: [User,Address],
        synchronize: true,
      })
    }),
  ],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule { }
