import { PrismaClient, Prisma } from "../../generated/prisma/index.js";
import type { OCartRepo } from "../../Domaine/ports/outputs/cartRepo.js";
import type {
  createCartDto,
  updateCartDto,
} from "../../Application/dtos/cart.js";
import type { Carts } from "../../Domaine/entities/carts.js";

export const prisma = new PrismaClient();

export class CartRepoImpl implements OCartRepo {
  private mapToCarts(data: any): Carts {
    return {
      id: Promise.resolve(data.id),
      card_details: data.card_details || [],
      user_id: data.user_id,
    };
  }

  async createCart(data: createCartDto): Promise<Carts | string> {
    try {
      const created = await prisma.carts.create({
        data: data as unknown as Prisma.CartsCreateInput,
      });
      return this.mapToCarts(created);
    } catch {
      return "error";
    }
  }

  async updateCart(data: updateCartDto): Promise<Carts | string> {
    try {
      const updated = await prisma.carts.update({
        where: { id: data.id },
        data: data as unknown as Prisma.CartsUpdateInput,
      });
      return this.mapToCarts(updated);
    } catch {
      return "error";
    }
  }

  async deleteCart(id: string): Promise<string> {
    try {
      const deleted = await prisma.carts.delete({ where: { id } });
      return deleted ? "success" : "error";
    } catch {
      return "error";
    }
  }

  async getByUserId(user_id: string): Promise<Carts[] | string> {
    try {
      const carts = await prisma.carts.findMany({ where: { user_id } });
      return carts.length > 0 ? carts.map((c) => this.mapToCarts(c)) : "error";
    } catch {
      return "error";
    }
  }

  async getByCartId(cartId: string): Promise<Carts | string> {
    try {
      const cart = await prisma.carts.findUnique({ where: { id: cartId } });
      return cart ? this.mapToCarts(cart) : "error";
    } catch {
      return "error";
    }
  }

  async getAllCarts(): Promise<Carts[] | string> {
    try {
      const carts = await prisma.carts.findMany();
      return carts.length > 0 ? carts.map((c) => this.mapToCarts(c)) : "error";
    } catch {
      return "error";
    }
  }
}
