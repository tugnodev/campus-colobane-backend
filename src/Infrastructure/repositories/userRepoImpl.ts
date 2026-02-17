import type { User } from "../../Domaine/entities/user.js";
import type { OUserRepo } from "../../Domaine/ports/outputs/userRepo.js";
import { PrismaClient } from "../../../prisma/generated/prisma/index.js";
import { auth } from "../config/auth.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { BetterAuthError } from "better-auth";
import type {
  authPack,
  createUserDto,
  turnToVendorDto,
  updateUserDto,
} from "../../Application/dtos/user.js";

const prisma = new PrismaClient();

export class UserRepoImpl implements OUserRepo {
  async createUser(data: createUserDto): Promise<authPack | string> {
    try {
      const newUser = await auth.api.signUpEmail({
        //@ts-ignore
        body: {
          name: data.name,
          email: data.email,
          password: data.password,
          image: data.image,
          rememberMe: data.rememberMe,
        },
      });

      const user = await prisma.user.update({
        where: { id: newUser.user.id },
        data: {
          vendeur: data.vendeur,
          address: data.address,
          certified: false,
        },
      });

      newUser.user = user;

      const cart = await prisma.carts
        .create({
          data: {
            userId: user.id,
            cart: [],
          },
        })
        .catch((error) => {
          return `Erreur lors de la création du panier: ${JSON.stringify(error)}"`;
        });

      console.log(cart);

      return newUser as authPack;
    } catch (e) {
      switch (e) {
        case e instanceof PrismaClientKnownRequestError:
          return "Unvalid data";
        case e instanceof BetterAuthError:
          return "User already exists";
        default:
          return "unknown Error";
      }
    }
  }

  async updateUser(data: updateUserDto): Promise<User | string> {
    try {
      const updatedUser = await prisma.user.update({
        where: { id: data.id },
        data,
      });

      return updatedUser;
    } catch (e) {
      switch (e) {
        case e instanceof PrismaClientKnownRequestError:
          return "Unvalid data";
        case e instanceof Error:
          return "Error updating user";
        default:
          return "Error updating user";
      }
    }
  }

  async deleteUser(id: string): Promise<string> {
    try {
      await prisma.user.delete({
        where: { id },
      });

      return "User deleted";
    } catch (e) {
      switch (e) {
        case e instanceof PrismaClientKnownRequestError:
          return "Unvalid data";
        case e instanceof Error:
          return "Error deleting user";
        default:
          return "Error deleting user";
      }
    }
  }

  async getUserById(id: string): Promise<User | string> {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
      });

      if (!user) {
        return "User not found";
      }

      return user;
    } catch (e) {
      switch (e) {
        case e instanceof PrismaClientKnownRequestError:
          return "Unvalid data";
        case e instanceof Error:
          return "Error getting user";
        default:
          return "Error getting user";
      }
    }
  }

  async turnToVendor(user: turnToVendorDto): Promise<User | string> {
    try {
      const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: { vendeur: true },
      });

      return updatedUser;
    } catch (e) {
      switch (e) {
        case e instanceof PrismaClientKnownRequestError:
          return "Unvalid data";
        case e instanceof Error:
          return "Error turning user to vendor";
        default:
          return "Error turning user to vendor";
      }
    }
  }

  async userLogout({
    headers,
  }: {
    headers: Headers;
  }): Promise<{ success: boolean }> {
    try {
      const logout = await auth.api.signOut({ headers });
      if (logout) {
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (e) {
      return { success: false };
    }
  }

  async getAllUsers(): Promise<User[] | string> {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (e) {
      switch (e) {
        case e instanceof PrismaClientKnownRequestError:
          return "Unvalid data";
        case e instanceof Error:
          return "Error getting users";
        default:
          return "Error getting users";
      }
    }
  }
}
