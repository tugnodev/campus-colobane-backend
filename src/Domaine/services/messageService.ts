import type {
  createMessageDto,
  updateMessageDto,
  getConversationDto,
  broadcastMessageDto,
} from "../../Application/dtos/messages.js";
import type {
  OMessageRepo,
  //OMessageBroadcast,
} from "../ports/outputs/messageRepo.js";
import type { IMessageService } from "../ports/inputs/messageService.js";
import type { Message } from "../entities/message.js";

export class MessageService implements IMessageService {
  private messageRepo: OMessageRepo;
  //private messageBroadcast: OMessageBroadcast;

  constructor(messageRepo: OMessageRepo) {
    this.messageRepo = messageRepo;
    //this.messageBroadcast = messageBroadcast;
  }

  async createMessage(message: createMessageDto): Promise<Message | string> {
    return this.messageRepo.createMessage(message);
  }

  async updateMessage(message: updateMessageDto): Promise<Message | string> {
    return this.messageRepo.updateMessage(message);
  }

  async deleteMessage(id: string): Promise<string> {
    return this.messageRepo.deleteMessage(id);
  }

  async getConversation(data: getConversationDto): Promise<Message[] | string> {
    return this.messageRepo.getConversation(data);
  }
}
