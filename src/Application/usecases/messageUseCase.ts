import type { OMessageRepo } from "../../Domaine/ports/outputs/messageRepo.js";
import type {
  createMessageDto,
  updateMessageDto,
  messageDto,
} from "../dtos/messages.js";
import { WebSocketHandler } from "../../Infrastructure/websocket/messageBroadcast.js";
import { type Message } from "../../Domaine/entities/message.js";
import { type IMessageService } from "../../Domaine/ports/inputs/messageService.js";

export class MessageUseCase implements IMessageService {
  private messageRepo: OMessageRepo;
  private notificationService: WebSocketHandler;

  constructor(
    messageRepo: OMessageRepo,
    notificationService: WebSocketHandler,
  ) {
    this.messageRepo = messageRepo;
    this.notificationService = notificationService;
  }

  async createMessage(
    messageData: createMessageDto,
  ): Promise<Message | string> {
    const newMessage = await this.messageRepo.saveMessage(messageData);
    const receiverSocket = this.notificationService
      .getAllClients()
      .get(messageData.receiver_id);
    if (receiverSocket) {
      receiverSocket.send(JSON.stringify(newMessage));
    }
    return newMessage;
  }

  async updateMessage(
    messageData: updateMessageDto,
  ): Promise<Message | string> {
    const updatedMessage = await this.messageRepo.updateMessage(messageData);
    const receiverSocket = this.notificationService
      .getAllClients()
      .get(messageData.receiver_id!);
    if (receiverSocket) {
      receiverSocket.send(JSON.stringify(updatedMessage));
    }
    return updatedMessage;
  }

  async deleteMessage(messageId: string): Promise<string> {
    const deletedMessage = await this.messageRepo.deleteMessage(messageId);
    if (!deletedMessage) {
      return "No message found";
    }
    return deletedMessage;
  }

  async getConversation(
    userId: string,
    receiver_id: string,
  ): Promise<Message[] | string> {
    const messages = await this.messageRepo.getMessagesByUserId(
      userId,
      receiver_id,
    );
    if (!messages) {
      return "No messages found";
    }
    return messages;
  }
}
