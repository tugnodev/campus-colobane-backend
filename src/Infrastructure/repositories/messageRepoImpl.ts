import { db } from "../../db/index.js";
import { room, messages } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import type { OMessageRepo } from "../../Domaine/ports/outputs/messageRepo.js";
import type {
  createMessageDto,
  getConversationDto,
  updateMessageDto,
} from "../../Application/dtos/messages.js";
import { type Message } from "../../Domaine/entities/message.js";

// Codes d'erreur Postgres utiles ici :
// 23505 = violation de contrainte unique
// 23503 = violation de clé étrangère
const isDataError = (error: any) =>
  error?.code === "23505" || error?.code === "23503";

export class MessageRepoImpl implements OMessageRepo {
  async createMessage(data: createMessageDto): Promise<Message | string> {
    try {
      const existingRoom = await db.selectDistinct().from(room).where(
        eq(room.buyerId, data.userId) && eq(room.sellerId, data.sellerId!),
      );

      if (!existingRoom) {
        const [newRoom] = await db
          .insert(room)
          .values({
            buyerId: data.userId,
            sellerId: data.sellerId!,
          })
          .returning();

        if (!newRoom) return "error while creating room";

        data.roomId = newRoom.id;
      }

      const [newMessage] = await db.insert(messages).values(data).returning();
      return newMessage;
    } catch (error) {
      if (isDataError(error)) return "invalid data";
      return "error while creating";
    }
  }

  async updateMessage(data: updateMessageDto): Promise<Message | string> {
    try {
      const { id, ...rest } = data;
      const [updated] = await db
        .update(messages)
        .set(rest)
        .where(eq(messages.id, id))
        .returning();

      if (!updated) return "invalid data";
      return updated;
    } catch (error) {
      if (isDataError(error)) return "invalid data";
      return "error while updating";
    }
  }

  async deleteMessage(id: string): Promise<string> {
    try {
      const [deleted] = await db
        .delete(messages)
        .where(eq(messages.id, id))
        .returning();

      return deleted ? "message deleted" : "message not found";
    } catch (error) {
      if (isDataError(error)) return "invalid data";
      return "error while deleting";
    }
  }

  async getConversation(data: getConversationDto): Promise<Message[] | string> {
    try {
      return await db
        .select()
        .from(messages)
        .where(eq(messages.roomId, data.roomId))
        .orderBy(messages.createdAt);
    } catch (error) {
      if (isDataError(error)) return "invalid data";
      return "error while getting conversation";
    }
  }
}
