import { PrismaClient } from "../../generated/prisma/index.js";
import type { OMessageRepo } from "../../Domaine/ports/outputs/messageRepo.js";
import type {
  createMessageDto,
  getConversationDto,
  updateMessageDto,
} from "../../Application/dtos/messages.js";

import { type Message } from "../../Domaine/entities/message.js";
import { PrismaClientKnownRequestError } from "../../generated/prisma/runtime/client.js";
const prisma = new PrismaClient();

export class MessageRepoImpl implements OMessageRepo {
  async createMessage(data: createMessageDto): Promise<Message | string> {
    try {
      const newArticle: Message = await prisma.messages.create({
        data,
      });
      return newArticle;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "invalid data";
      }
      return "error while creating";
    }
  }

  async updateMessage(data: updateMessageDto): Promise<Message | string> {
    try {
      const update: Message = await prisma.messages.update({
        where: { id: data.id },
        data,
      });
      return update;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "invalid data";
      }
      return "error while updating";
    }
  }

  async deleteMessage(id: string): Promise<string> {
    try {
      const deleted = await prisma.messages.delete({
        where: { id },
      });
      return deleted ? "message deleted" : "message not found";
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "invalid data";
      }
      return "error while deleting";
    }
  }

  async getConversation(data: getConversationDto): Promise<Message[] | string> {
    try {
      const conversation: Message[] = await prisma.messages.findMany({
        where: { roomId: data.roomId },
        orderBy: { createdAt: "asc" },
      });
      return conversation;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "invalid data";
      }
      return "error while getting conversation";
    }
  }
}
