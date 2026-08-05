import type { Room } from "../entities/room.js";
import type { IRoomService } from "../ports/inputs/roomService.js";
import type { ORoomRepo } from "../ports/outputs/roomRepo.js";
import type {
  createRoomDto,
  updateRoomDto,
  deleteRoomDto,
} from "../../Application/dtos/room.js";

export class RoomService implements IRoomService {
  private repo: ORoomRepo;
  constructor(repo: ORoomRepo) {
    this.repo = repo;
  }

  createRoom(data: createRoomDto): Promise<Room | string> {
    return this.repo.createRoom(data);
  }

  updateRoom(data: updateRoomDto): Promise<Room | string> {
    return this.repo.updateRoom(data);
  }

  deleteRoom(data: deleteRoomDto): Promise<string> {
    return this.repo.deleteRoom(data);
  }

  getRoomById(id: string): Promise<Room | string> {
    return this.repo.getRoomById(id);
  }

  getAllRooms(): Promise<Room[] | string> {
    return this.repo.getAllRooms();
  }
}
