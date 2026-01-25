import type {
  createUserDto,
  turnToAdminDto,
  updateUserDto,
  userDto,
  authPack,
} from "../../../Application/dtos/user.js";
import type { User } from "../../entities/user.js";

export interface OUserRepo {
  createUser(user: createUserDto): Promise<authPack | string>;
  updateUser(user: updateUserDto): Promise<User | string>;
  deleteUser(id: string): Promise<string>;
  getUserById(id: string): Promise<User | string>;
  getAllUsers(): Promise<userDto[] | string>;
  turnToAdmin(user: turnToAdminDto): Promise<User | string>;
}
