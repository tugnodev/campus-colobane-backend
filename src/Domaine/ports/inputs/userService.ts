import type {
  authPack,
  createUserDto,
  updateUserDto,
  userStatsDto,
} from "../../../Application/dtos/user.js";
import type { User } from "../../entities/user.js";

export interface IUserService {
  createUser(user: createUserDto): Promise<authPack | string>;
  updateUser(user: updateUserDto): Promise<User | string>;
  userLogout({ headers }: { headers: Headers }): Promise<{ success: boolean }>;
  deleteUser(id: string): Promise<string>;
  getUserById(id: string): Promise<User | string>;
  getAllUsers(): Promise<User[] | string>;
  getStats(userId: string): Promise<userStatsDto | string>;
}
