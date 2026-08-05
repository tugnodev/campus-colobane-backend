export class UserService {
    userRepo;
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async createUser(user) {
        return this.userRepo.createUser(user);
    }
    async userLogout({ headers, }) {
        return this.userRepo.userLogout({ headers });
    }
    async updateUser(user) {
        return this.userRepo.updateUser(user);
    }
    async deleteUser(id) {
        return this.userRepo.deleteUser(id);
    }
    async getUserById(id) {
        return this.userRepo.getUserById(id);
    }
    async getAllUsers() {
        return this.userRepo.getAllUsers();
    }
}
