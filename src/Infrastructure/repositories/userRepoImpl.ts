import type { User } from "../../Domaine/entities/user.js";
import type { OUserRepo } from "../../Domaine/ports/outputs/userRepo.js";
import { db } from "../../db/index.js";
import { user, carts, numbers, articles, orders } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import { auth } from "../config/auth.js";
import { OrderStatus } from "../../Domaine/entities/orders.js";
import { BetterAuthError } from "better-auth";
import type {
  authPack,
  createUserDto,
  turnToVendorDto,
  updateUserDto,
  userStatsDto,
} from "../../Application/dtos/user.js";

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

      const [updatedUser] = await db
        .update(user)
        .set({
          vendeur: false,
          address: data.address,
          certified: false,
        })
        .where(eq(user.id, newUser.user.id))
        .returning();

      newUser.user = updatedUser;

      await db
        .insert(carts)
        .values({ userId: updatedUser.id, cart: [] })
        .catch((error) => {
          console.error(
            `Erreur lors de la création du panier: ${JSON.stringify(error)}`,
          );
        });

      return newUser as authPack;
    } catch (e: any) {
      if (e?.code === "23505") {
        return "Unvalid data";
      }
      if (e instanceof BetterAuthError) {
        return "User already exists";
      }
      return "unknown Error";
    }
  }

  async updateUser(data: updateUserDto): Promise<User | string> {
    try {
      const { id, ...rest } = data;
      const [updatedUser] = await db
        .update(user)
        .set(rest)
        .where(eq(user.id, id))
        .returning();

      if (!updatedUser) return "User not found";
      return updatedUser;
    } catch (e: any) {
      if (e?.code === "23505") {
        return "Unvalid data";
      }
      return "Error updating user";
    }
  }

  async deleteUser(id: string): Promise<string> {
    try {
      const [deleted] = await db
        .delete(user)
        .where(eq(user.id, id))
        .returning();

      if (!deleted) return "User not found";
      return "User deleted";
    } catch (e: any) {
      if (e?.code === "23505") {
        return "Unvalid data";
      }
      return "Error deleting user";
    }
  }

  async getUserById(id: string): Promise<User | string> {
    try {
      const found = await db.selectDistinct().from(user).where(eq(user.id, id));

      if (!found) return "User not found";
      return found[0];
    } catch (e) {
      return "Error getting user";
    }
  }

  async turnToVendor(data: turnToVendorDto): Promise<User | string> {
    try {
      await db
        .insert(numbers)
        .values({ sellerId: data.id, number: data.phone })
        .catch((error) => {
          console.error("error while saving number", error);
        });

      const [updatedUser] = await db
        .update(user)
        .set({ vendeur: true, address: data.address })
        .where(eq(user.id, data.id))
        .returning();

      if (!updatedUser) return "User not found";
      return updatedUser;
    } catch (e: any) {
      if (e?.code === "23505") {
        return "Unvalid data";
      }
      return "Error turning user to vendor";
    }
  }

  async userLogout({
    headers,
  }: {
    headers: Headers;
  }): Promise<{ success: boolean }> {
    try {
      const logout = await auth.api.signOut({ headers });
      return { success: !!logout };
    } catch (e) {
      return { success: false };
    }
  }

  async getStats(id: string): Promise<userStatsDto | string> {
    try {
      const userArticles = await db
        .select()
        .from(articles)
        .where(eq(articles.userId, id));

      const userOrders = await db
        .select()
        .from(orders)
        .where(eq(orders.buyerId, id));

      return {
        articles: {
          total: userArticles.length,
          rupture: userArticles.filter((a) => a.stock === 0).length,
        },
        commandes: {
          total: userOrders.length,
          attente: userOrders.filter((o) => o.status === OrderStatus.ATTENTE)
            .length,
          acceptees: userOrders.filter(
            (o) => o.status === OrderStatus.VALIDEE,
          ).length,
          annulees: userOrders.filter((o) => o.status === OrderStatus.ANNULEE)
            .length,
        },
      };
    } catch (e) {
      return "Error getting stats";
    }
  }

  async getAllUsers(): Promise<User[] | string> {
    try {
      return await db.select().from(user);
    } catch (e) {
      return "Error getting users";
    }
  }
}
