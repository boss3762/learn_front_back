import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController,CoursesController],
  providers: [AppService],
})
export class AppModule {}
