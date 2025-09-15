import type { createUserDto, updateUserDto, userDto } from "../../../Application/dtos/user.js";

export interface IUserService {
    createUser(user : createUserDto) : Promise<userDto | string>;
    updateUser(user : updateUserDto) : Promise<userDto | string>;
    getUserByEmail(email : string) : Promise<userDto | string>;
    userLogout({ headers }: { headers: Headers }) : Promise<{ success: boolean }>;
    deleteUser(id : string) : Promise<string>;
    getUserById(id : string) : Promise<userDto | string>;
    getAllUsers() : Promise<userDto[] | string>;
}