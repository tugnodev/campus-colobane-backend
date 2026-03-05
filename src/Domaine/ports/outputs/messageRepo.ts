import type { WSEvents } from "hono/ws";
import type {
  createMessageDto,
  updateMessageDto,
  getConversationDto,
  broadcastMessageDto,
} from "../../../Application/dtos/messages.js";
import type { Message } from "../../entities/message.js";

export interface OMessageRepo {
  createMessage(newMessage: createMessageDto): Promise<Message | string>;
  updateMessage(message: updateMessageDto): Promise<Message | string>;
  deleteMessage(id: string): Promise<string>;
  getConversation(data: getConversationDto): Promise<Message[] | string>;
}

export interface OMessageBroadcast {
  broadcast(message: broadcastMessageDto): Promise<any>;
}
