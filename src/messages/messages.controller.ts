import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesServices } from './messages.services';

@Controller('messages')
export class MessagesController {
  messagesServ: MessagesServices;
  constructor() {
    // DONT DO THIS ON REAL APP
    // USE DEPENDENCY INJECTION
    this.messagesServ = new MessagesServices();
  }

  @Get()
  listMessage(@Param('id') id: string) {
    return this.messagesServ.findOne(id);
  }
  @Get('/:id')
  async getMessage() {
    const message = await this.messagesServ.findAll();
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesServ.create(body.content);
  }
}
