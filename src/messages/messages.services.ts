import { MessagesRepository } from './messages.repository';

export class MessagesServices {
  messageRepo: MessagesRepository;
  constructor() {
    // services is creating its own dependencies
    // DO NOT DO this on Real App
    this.messageRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(message: string) {
    return this.messageRepo.create(message);
  }
}
