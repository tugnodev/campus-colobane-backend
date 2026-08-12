import type {
  createMessageDto,
  updateMessageDto,
  getConversationDto,
} from "../../../Application/dtos/messages.js";
import type { Message } from "../../entities/message.js";

export interface IMessageService {
  createMessage(newMessage: createMessageDto): Promise<Message | string>;
  updateMessage(message: updateMessageDto): Promise<Message | string>;
  deleteMessage(id: string): Promise<string>;
  getConversation(data: getConversationDto): Promise<Message[] | string>;
  getMessage(id: string): Promise<Message | string>;
}
