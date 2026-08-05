import {} from "../../Domaine/entities/room.js";
import {} from "../../Domaine/ports/inputs/roomService.js";
import {} from "../../Domaine/ports/outputs/roomRepo.js";
export class RoomUseCase {
    roomRepo;
    constructor(roomRepo) {
        this.roomRepo = roomRepo;
    }
    async createRoom(data) {
        return this.roomRepo.createRoom(data);
    }
    async updateRoom(data) {
        return this.roomRepo.updateRoom(data);
    }
    async deleteRoom(data) {
        return this.roomRepo.deleteRoom(data);
    }
    async getRoomById(id) {
        return this.roomRepo.getRoomById(id);
    }
    async getAllRooms() {
        return this.getAllRooms();
    }
}
