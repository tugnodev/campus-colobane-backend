import { PrismaClient } from "../../generated/prisma/index.js";
import type { OMessageRepo } from "../../Domaine/ports/outputs/messageRepo.js";
import type {
  createMessageDto,
  updateMessageDto,
  messageDto,
} from "../../Application/dtos/messages.js";

import { type Message } from "../../Domaine/entities/message.js";

const prisma = new PrismaClient();

export class MessageRepoImpl implements OMessageRepo {
  // Petit helper pour éviter la répétition du mapping
  private mapToEntity(dbMessage: any): Message {
    return dbMessage;
  }

  async saveMessage(message: createMessageDto): Promise<Message | string> {
    try {
      const newMes = await prisma.messages.create({ data: { 
        sender_id : message.sender_id,
        receiver_id : message.receiver_id,
        article_id : message.article_id,
        message : message.message,
       } });
      return this.mapToEntity(newMes);
    } catch (error) {
      console.error(error);
      return "Error while creating message";
    }
  }

  async updateMessage(message: updateMessageDto): Promise<Message | string> {
    try {
        const { id, ...data } = message;
      const update = await prisma.messages.update({
        where: { id: id },
        data,
      });
      return this.mapToEntity(update);
    } catch (error) {
      console.error(error);
      return "Error while updating message";
    }
  }

  async deleteMessage(id: string): Promise<string> {
    try {
      await prisma.messages.delete({ where: { id } });
      return "Message deleted successfully";
    } catch (error) {
      console.error(error);
      return "Error while deleting message";
    }
  }

  async getMessageById(id: string): Promise<Message | null> {
    try {
      const message = await prisma.messages.findUnique({ where: { id } });
      if (!message) return null;
      return this.mapToEntity(message);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getMessagesByUserId(receiver_id: string): Promise<Message[] | string> {
    try {
      const message = await prisma.messages.findMany({ where: { receiver_id: receiver_id } });
      if (!message || message.length === 0) return "No messages found for this user";
      return message.map(this.mapToEntity);
    } catch (error) {
      console.error(error);
      return "Error fetching messages for this user";
    }
  }
}