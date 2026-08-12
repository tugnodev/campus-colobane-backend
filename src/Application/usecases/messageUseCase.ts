import type {
  OMessageRepo,
  OMessageBroadcast,
} from "../../Domaine/ports/outputs/messageRepo.js";
import type {
  createMessageDto,
  updateMessageDto,
  getConversationDto,
  broadcastMessageDto,
} from "../dtos/messages.js";
import { type Message } from "../../Domaine/entities/message.js";
import { type IMessageService } from "../../Domaine/ports/inputs/messageService.js";

export class MessageUseCase implements IMessageService {
  private messageRepo: OMessageRepo;
  //private notificationService: OMessageBroadcast;

  constructor(
    messageRepo: OMessageRepo,
    //notificationService: OMessageBroadcast,
  ) {
    this.messageRepo = messageRepo;
    //this.notificationService = notificationService;
  }

  async createMessage(
    messageData: createMessageDto,
  ): Promise<Message | string> {
    const newMessage = await this.messageRepo.createMessage(messageData);
    switch (typeof newMessage) {
      case "string":
        return newMessage;
      case "object":
        const dto: broadcastMessageDto = {
          roomId: messageData.roomId,
          payload: JSON.stringify(newMessage),
        };
        //this.notificationService.broadcast(dto);
        return newMessage;
    }
    return newMessage;
  }

  async updateMessage(
    messageData: updateMessageDto,
  ): Promise<Message | string> {
    const updatedMessage = await this.messageRepo.updateMessage(messageData);
    switch (typeof updatedMessage) {
      case "string":
        return updatedMessage;
      case "object":
        const dto: broadcastMessageDto = {
          roomId: messageData.roomId,
          payload: JSON.stringify(updatedMessage),
        };
        //this.notificationService.broadcast(dto);
        return updatedMessage;
    }
  }

  async deleteMessage(messageId: string): Promise<string> {
    const deletedMessage = await this.messageRepo.deleteMessage(messageId);
    if (!deletedMessage) {
      return "No message found";
    }
    return deletedMessage;
  }

  async getMessage(id: string): Promise<Message | string> {
    return this.messageRepo.getMessage(id);
  }

  async getConversation(data: getConversationDto): Promise<Message[] | string> {
    return this.messageRepo.getConversation(data);
  }
}
