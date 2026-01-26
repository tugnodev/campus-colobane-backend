import type {
  createUserDto,
  turnToVendorDto,
  updateUserDto,
  authPack,
} from "../../../Application/dtos/user.js";
import type { User } from "../../entities/user.js";

export interface OUserRepo {
  createUser(user: createUserDto): Promise<authPack | string>;
  updateUser(user: updateUserDto): Promise<User | string>;
  deleteUser(id: string): Promise<string>;
  userLogout({ headers }: { headers: Headers }): Promise<{ success: boolean }>;
  getUserById(id: string): Promise<User | string>;
  getAllUsers(): Promise<User[] | string>;
  turnToVendor(user: turnToVendorDto): Promise<User | string>;
}
