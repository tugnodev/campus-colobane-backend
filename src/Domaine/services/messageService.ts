import type {
  createMessageDto,
  updateMessageDto,
  getConversationDto,
  broadcastMessageDto,
} from "../../Application/dtos/messages.js";
import type {
  OMessageRepo,
  OMessageBroadcast,
} from "../ports/outputs/messageRepo.js";
import type { IMessageService } from "../ports/inputs/messageService.js";
import type { Message } from "../entities/message.js";

export class MessageService implements IMessageService {
  private messageRepo: OMessageRepo;
  private messageBroadcast: OMessageBroadcast;

  constructor(messageRepo: OMessageRepo, messageBroadcast: OMessageBroadcast) {
    this.messageRepo = messageRepo;
    this.messageBroadcast = messageBroadcast;
  }

  async createMessage(message: createMessageDto): Promise<Message | string> {
    const createdMessage = await this.messageRepo.createMessage(message);
    const dto: broadcastMessageDto = {
      roomId: message.roomId,
      payload: JSON.stringify(createdMessage),
    };
    this.messageBroadcast.broadcast(dto);
    return createdMessage;
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
