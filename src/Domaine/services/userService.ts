import type { IUserService } from "../ports/inputs/userService.js";
import type { createUserDto, updateUserDto, userDto } from "../../Application/dtos/user.js";
import type { OUserRepo } from "../ports/outputs/userRepo.js";

export class UserService implements IUserService {
    private userRepo: OUserRepo;

    constructor(userRepo: OUserRepo) {
        this.userRepo = userRepo;
    }

    async createUser(user: createUserDto): Promise<userDto | string> {
        return this.userRepo.createUser(user);
    }

    async getUserByEmail(email: string): Promise<userDto | string> {
        return this.userRepo.getUserByEmail(email);
    }

    async userLogout({ headers }: { headers: Headers }): Promise<{ success: boolean }> {
        return this.userRepo.userLogout({ headers });
    }

    async updateUser(user: updateUserDto): Promise<userDto | string> {
        return this.userRepo.updateUser(user);
    }

    async deleteUser(id: string): Promise<string> {
        return this.userRepo.deleteUser(id);
    }

    async getUserById(id: string): Promise<userDto | string> {
        return this.userRepo.getUserById(id);
    }

    async getAllUsers(): Promise<userDto[] | string> {
        return this.userRepo.getAllUsers();
    }
}