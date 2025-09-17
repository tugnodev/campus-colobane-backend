import type { createUserDto, turnToAdminDto, updateUserDto, userDto } from "../../../Application/dtos/user.js";

export interface OUserRepo {
    createUser(user: createUserDto): Promise<userDto | string>;
    updateUser(user: updateUserDto): Promise<userDto | string>;
    deleteUser(id: string): Promise<string>;
    getUserById(id: string): Promise<userDto | string>;
    getAllUsers(): Promise<userDto[] | string>;
    turnToAdmin(user: turnToAdminDto): Promise<userDto | string>;
}