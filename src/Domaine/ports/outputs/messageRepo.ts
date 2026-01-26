import type {
  createMessageDto,
  updateMessageDto,
} from "../../../Application/dtos/messages.js";
import { type Message } from "../../entities/message.js";

export interface OMessageRepo {
  saveMessage(message: createMessageDto): Promise<Message | string>;
  updateMessage(message: updateMessageDto): Promise<Message | string>;
  deleteMessage(id: string): Promise<string>;
  getMessageById(id: string): Promise<Message | null>;
  getMessagesByUserId(sender_id : string,receiver_id: string): Promise<Message[] | string>;
}
