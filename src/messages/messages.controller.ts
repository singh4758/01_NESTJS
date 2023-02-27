import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessage(@Param('id') id: string) {
    console.log(id);
  }
  @Get('/:id')
  getMessage() {}
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }
}
