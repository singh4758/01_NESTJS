import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessage(@Param('id') id: string) {
    console.log(id);
  }
  @Get('/:id')
  getMessage() {}
  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }
}
