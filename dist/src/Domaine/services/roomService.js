export class RoomService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    createRoom(data) {
        return this.repo.createRoom(data);
    }
    updateRoom(data) {
        return this.repo.updateRoom(data);
    }
    deleteRoom(data) {
        return this.repo.deleteRoom(data);
    }
    getRoomById(id) {
        return this.repo.getRoomById(id);
    }
    getAllRooms() {
        return this.repo.getAllRooms();
    }
}
