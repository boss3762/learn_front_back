import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll():any {
    return [{
        id: '100',
        number: '01204111',
        title: 'compro',
    },
    {
      id: '200',
      number: '01204311',
      title: 'discrete',
    }];
  }
}
