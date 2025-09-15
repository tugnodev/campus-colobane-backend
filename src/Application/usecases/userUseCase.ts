import type { OUserRepo } from '../../Domaine/ports/outputs/userRepo.js';
import type { createUserDto, updateUserDto, userDto } from '../dtos/user.js';

export class UserUseCase {
    private userRepo: OUserRepo;

    constructor(userRepo: OUserRepo) {
        this.userRepo = userRepo;
    }

    async createUser(userData: createUserDto): Promise<userDto | string> {
        return this.userRepo.createUser(userData);
    }   

    async updateUser(userData: updateUserDto): Promise<userDto | string> {
        return this.userRepo.updateUser(userData);
    }

    async deleteUser(userId: string): Promise<string> {
        return this.userRepo.deleteUser(userId);
    }

    async getUserById(userId: string): Promise<userDto | string> {
        return this.userRepo.getUserById(userId);
    }

    async getAllUsers(): Promise<userDto[] | string> {
        return this.userRepo.getAllUsers();
    }
}
