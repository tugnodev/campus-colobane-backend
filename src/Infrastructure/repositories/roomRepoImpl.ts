import { db } from "../../db/index.js";
import { room } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import type { Room } from "../../Domaine/entities/room.js";
import type { ORoomRepo } from "../../Domaine/ports/outputs/roomRepo.js";
import type {
  createRoomDto,
  updateRoomDto,
  deleteRoomDto,
} from "../../Application/dtos/room.js";

export class RoomRepositoryImpl implements ORoomRepo {
  async createRoom(data: createRoomDto): Promise<Room | string> {
    try {
      const [created] = await db.insert(room).values(data).returning();
      return created;
    } catch (error: any) {
      if (error?.code === "23505") {
        return "Room already exists";
      }
      return "An error occurred";
    }
  }

  async updateRoom(data: updateRoomDto): Promise<Room | string> {
    try {
      const { id, ...rest } = data;
      const [updated] = await db
        .update(room)
        .set(rest)
        .where(eq(room.id, id))
        .returning();

      if (!updated) return "Room not found";
      return updated;
    } catch (error: any) {
      if (error?.code === "23505") {
        return "Room already exists";
      }
      return "An error occurred";
    }
  }

  async deleteRoom(data: deleteRoomDto): Promise<string> {
    try {
      const [deleted] = await db
        .delete(room)
        .where(eq(room.id, data.id))
        .returning();

      if (!deleted) return "Room not found";
      return "Room deleted successfully";
    } catch (error) {
      return "An error occurred";
    }
  }

  async getRoomById(id: string): Promise<Room | string> {
    try {
      const found = await db.selectDistinct().from(room).where(eq(room.id, id));

      if (!found) return "Room not found";
      return found[0];
    } catch (error) {
      return "An error occurred";
    }
  }

  async getAllRooms(): Promise<Room[] | string> {
    try {
      return await db.select().from(room);
    } catch (error) {
      return "An error occurred";
    }
  }
}
