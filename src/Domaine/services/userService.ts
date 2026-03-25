import type { IUserService } from "../ports/inputs/userService.js";
import type {
  authPack,
  createUserDto,
  updateUserDto,
  userStatsDto,
} from "../../Application/dtos/user.js";
import type { OUserRepo } from "../ports/outputs/userRepo.js";
import type { User } from "../entities/user.js";

export class UserService implements IUserService {
  private userRepo: OUserRepo;

  constructor(userRepo: OUserRepo) {
    this.userRepo = userRepo;
  }

  async createUser(user: createUserDto): Promise<authPack | string> {
    return this.userRepo.createUser(user);
  }

  async userLogout({
    headers,
  }: {
    headers: Headers;
  }): Promise<{ success: boolean }> {
    return this.userRepo.userLogout({ headers });
  }

  async updateUser(user: updateUserDto): Promise<User | string> {
    return this.userRepo.updateUser(user);
  }

  async deleteUser(id: string): Promise<string> {
    return this.userRepo.deleteUser(id);
  }

  async getUserById(id: string): Promise<User | string> {
    return this.userRepo.getUserById(id);
  }

  async getAllUsers(): Promise<User[] | string> {
    return this.userRepo.getAllUsers();
  }

  async getStats(userId: string): Promise<userStatsDto | string> {
    return this.userRepo.getStats(userId);
  }
}
