import { type Room } from "../../Domaine/entities/room.js";
import { type IRoomService } from "../../Domaine/ports/inputs/roomService.js";
import { type ORoomRepo } from "../../Domaine/ports/outputs/roomRepo.js";
import type {
  createRoomDto,
  updateRoomDto,
  deleteRoomDto,
} from "../dtos/room.js";

export class RoomUseCase implements IRoomService {
  constructor(private readonly roomRepo: ORoomRepo) {}

  async createRoom(data: createRoomDto): Promise<Room | string> {
    return this.roomRepo.createRoom(data);
  }

  async updateRoom(data: updateRoomDto): Promise<Room | string> {
    return this.roomRepo.updateRoom(data);
  }

  async deleteRoom(data: deleteRoomDto): Promise<string> {
    return this.roomRepo.deleteRoom(data);
  }

  async getRoomById(id: string): Promise<Room | string> {
    return this.roomRepo.getRoomById(id);
  }

  async getAllRooms(): Promise<Room[] | string> {
    return this.getAllRooms();
  }
}
