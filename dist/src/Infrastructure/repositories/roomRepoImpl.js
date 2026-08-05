import { PrismaClient } from "../../../prisma/generated/prisma/index.js";
import { PrismaClientKnownRequestError } from "../../../prisma/generated/prisma/runtime/library.js";
const prisma = new PrismaClient();
export class RoomRepositoryImpl {
    async createRoom(data) {
        try {
            const room = await prisma.room.create({
                data,
            });
            return room;
        }
        catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                return "Room already exists";
            }
            return "An error occurred";
        }
    }
    async updateRoom(data) {
        try {
            const room = await prisma.room.update({
                where: { id: data.id },
                data,
            });
            return room;
        }
        catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                return "Room not found";
            }
            return "An error occurred";
        }
    }
    async deleteRoom(data) {
        try {
            await prisma.room.delete({
                where: { id: data.id },
            });
            return "Room deleted successfully";
        }
        catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                return "Room not found";
            }
            return "An error occurred";
        }
    }
    async getRoomById(id) {
        try {
            const room = await prisma.room.findUnique({
                where: { id },
            });
            return room;
        }
        catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                return "Room not found";
            }
            return "An error occurred";
        }
    }
    async getAllRooms() {
        try {
            const rooms = await prisma.room.findMany();
            return rooms;
        }
        catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                return "An error occurred";
            }
            return "An error occurred";
        }
    }
}
