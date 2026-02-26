import type { User } from "../../Domaine/entities/user.js";
import type { OUserRepo } from "../../Domaine/ports/outputs/userRepo.js";
import type {
  createUserDto,
  updateUserDto,
  authPack,
  turnToVendorDto,
  userStatsDto,
} from "../dtos/user.js";
import { type IUserService } from "../../Domaine/ports/inputs/userService.js";

export class UserUseCase implements IUserService {
  private userRepo: OUserRepo;

  constructor(userRepo: OUserRepo) {
    this.userRepo = userRepo;
  }

  async createUser(userData: createUserDto): Promise<authPack | string> {
    return this.userRepo.createUser(userData);
  }

  async updateUser(userData: updateUserDto): Promise<User | string> {
    return this.userRepo.updateUser(userData);
  }

  async userLogout({
    headers,
  }: {
    headers: Headers;
  }): Promise<{ success: boolean }> {
    return this.userRepo.userLogout({ headers });
  }

  async deleteUser(userId: string): Promise<string> {
    return this.userRepo.deleteUser(userId);
  }

  async getUserById(userId: string): Promise<User | string> {
    return this.userRepo.getUserById(userId);
  }

  async getAllUsers(): Promise<User[] | string> {
    return this.userRepo.getAllUsers();
  }

  async turnToVendor(user: turnToVendorDto): Promise<User | string> {
    return this.userRepo.turnToVendor(user);
  }

  async getStats(userId: string): Promise<userStatsDto | string> {
    return this.userRepo.getStats(userId);
  }
}
