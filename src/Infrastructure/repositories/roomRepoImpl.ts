import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaClientKnownRequestError } from "../../generated/prisma/runtime/client.js";
import type { Room } from "../../Domaine/entities/room.js";
import type { ORoomRepo } from "../../Domaine/ports/outputs/roomRepo.js";
import type {
  createRoomDto,
  updateRoomDto,
  deleteRoomDto,
} from "../../Application/dtos/room.js";

const prisma = new PrismaClient();
export class RoomRepositoryImpl implements ORoomRepo {
  async createRoom(data: createRoomDto): Promise<Room | string> {
    try {
      const room = await prisma.room.create({
        data,
      });
      return room;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "Room already exists";
      }
      return "An error occurred";
    }
  }

  async updateRoom(data: updateRoomDto): Promise<Room | string> {
    try {
      const room = await prisma.room.update({
        where: { id: data.id },
        data,
      });
      return room;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "Room not found";
      }
      return "An error occurred";
    }
  }

  async deleteRoom(data: deleteRoomDto): Promise<string> {
    try {
      await prisma.room.delete({
        where: { id: data.id },
      });
      return "Room deleted successfully";
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "Room not found";
      }
      return "An error occurred";
    }
  }

  async getRoomById(id: string): Promise<Room | string> {
    try {
      const room = await prisma.room.findUnique({
        where: { id },
      });

      return room!;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "Room not found";
      }
      return "An error occurred";
    }
  }

  async getAllRooms(): Promise<Room[] | string> {
    try {
      const rooms = await prisma.room.findMany();

      return rooms;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "An error occurred";
      }
      return "An error occurred";
    }
  }
}
