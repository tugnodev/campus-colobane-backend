import type {
  createRoomDto,
  updateRoomDto,
  deleteRoomDto,
} from "../../../Application/dtos/room.js";
import type { Room } from "../../entities/room.js";

export interface ORoomRepo {
  createRoom(dto: createRoomDto): Promise<Room | string>;
  updateRoom(dto: updateRoomDto): Promise<Room | string>;
  deleteRoom(dto: deleteRoomDto): Promise<string>;
  getRoomById(id: string): Promise<Room | string>;
  getAllRooms(): Promise<Room[] | string>;
}
