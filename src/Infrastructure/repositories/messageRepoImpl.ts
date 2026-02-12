import { PrismaClient } from "../../../prisma/generated/prisma/index.js";
import { PrismaClientKnownRequestError } from "../../../prisma/generated/prisma/runtime/library.js";
import type { OMessageRepo } from "../../Domaine/ports/outputs/messageRepo.js";
import type {
  createMessageDto,
  getConversationDto,
  updateMessageDto,
} from "../../Application/dtos/messages.js";

import { type Message } from "../../Domaine/entities/message.js";
import type { Room } from "../../Domaine/entities/room.js";
const prisma = new PrismaClient();

export class MessageRepoImpl implements OMessageRepo {
  async createMessage(data: createMessageDto): Promise<Message | string> {
    try {
      const room = await prisma.room
        .findUnique({
          where: { id: data.roomId },
        })
        .catch((error) => {
          return "room not found";
        });

      if (!room) {
        //create room
        const newRoom = await prisma.room.create({
          data: {
            buyerId: data.userId,
            sellerId: data.sellerId!,
          },
        });

        if (!newRoom) {
          return "error while creating room";
        }

        data.roomId = newRoom.id;
      }

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
