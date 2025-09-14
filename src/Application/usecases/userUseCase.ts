import type { IUserService } from '../../Domaine/ports/inputs/userService.js';
import type { createUserDto, updateUserDto, userDto } from '../dtos/user.js';

export class UserUseCase {
    private userService: IUserService;

    constructor(userService: IUserService) {
        this.userService = userService;
    }

    async create(userData: createUserDto): Promise<userDto | string> {
        return this.userService.createUser(userData);
    }

    async update(userData: updateUserDto): Promise<userDto | string> {
        return this.userService.updateUser(userData);
    }

    async delete(userId: string): Promise<string> {
        return this.userService.deleteUser(userId);
    }

    async getById(userId: string): Promise<userDto | string> {
        return this.userService.getUserById(userId);
    }

    async getAll(): Promise<userDto[] | string> {
        return this.userService.getAllUsers();
    }
}
