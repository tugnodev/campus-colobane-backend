import {} from "../../Domaine/ports/inputs/userService.js";
export class UserUseCase {
    userRepo;
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async createUser(userData) {
        return this.userRepo.createUser(userData);
    }
    async updateUser(userData) {
        return this.userRepo.updateUser(userData);
    }
    async userLogout({ headers, }) {
        return this.userRepo.userLogout({ headers });
    }
    async deleteUser(userId) {
        return this.userRepo.deleteUser(userId);
    }
    async getUserById(userId) {
        return this.userRepo.getUserById(userId);
    }
    async getAllUsers() {
        return this.userRepo.getAllUsers();
    }
    async turnToVendor(user) {
        return this.userRepo.turnToVendor(user);
    }
    async getStats(userId) {
        return this.userRepo.getStats(userId);
    }
}
