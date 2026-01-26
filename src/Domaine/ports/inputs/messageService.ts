import type {
  createMessageDto,
  updateMessageDto,
} from "../../../Application/dtos/messages.js";
import type { Message } from "../../entities/message.js";

export interface IMessageService {
  createMessage(newMessage: createMessageDto): Promise<Message | string>;
  updateMessage(message: updateMessageDto): Promise<Message | string>;
  deleteMessage(id: string): Promise<string>;
  getMessagesByUserId(receiverId: string): Promise<Message[] | string>;
}
