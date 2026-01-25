import type { OUserRepo } from "../../Domaine/ports/outputs/userRepo.js";
import type {
  createUserDto,
  updateUserDto,
  userDto,
  turnToAdminDto,
  authPack,
} from "../../Application/dtos/user.js";
import { auth, prisma } from "../config/auth.js";

export class UserRepoImpl implements OUserRepo {
  async createUser(user: createUserDto): Promise<authPack | string> {
    try {
      const created = await auth.api.signUpEmail({
        body: {
          name: user.name,
          email: user.email,
          password: user.password,
        },
      });

      const createdUser = await prisma.user.update({
        where: { id: created.user.id },
        data: user,
      });

      created.user = createdUser;

      return created;
    } catch (error) {
      return "Error while creating";
    }
  }

  async updateUser(user: updateUserDto): Promise<userDto | string> {
    //check user existence
    const fetchedUser = await prisma.user.findUnique({
      where: { id: user.id },
    });
    if (!fetchedUser) {
      return "Error while patching";
    }
    const updated = await prisma.user.update({
      where: { id: user.id },
      data: user,
    });
    return updated;
  }

  async deleteUser(id: string): Promise<string> {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return "User Not Found";
    await prisma.user.delete({ where: { id } });
    return "User Deleted";
  }

  async getUserById(id: string): Promise<userDto | string> {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return "User Not Found";
    return user;
  }

  async getAllUsers(): Promise<userDto[] | string> {
    const users = await prisma.user.findMany();
    if (!users) return "Users Not Found";
    return users as userDto[];
  }

  async turnToAdmin(user: turnToAdminDto): Promise<userDto | string> {
    const fetchedUser = await prisma.user.findUnique({
      where: { id: user.id },
    });
    if (!fetchedUser) {
      return "Error while patching";
    }
    const updated = await prisma.user.update({
      where: { id: user.id },
      data: user,
    });
    return updated;
  }
}
