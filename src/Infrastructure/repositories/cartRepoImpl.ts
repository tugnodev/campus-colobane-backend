import type { OCartRepo } from "../../Domaine/ports/outputs/cartRepo.js";
import type {
  createCartDto,
  updateCartDto,
  cartDto,
} from "../../Application/dtos/cart.js";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export class CartRepoImpl implements OCartRepo {
  async createCart(data: createCartDto): Promise<cartDto | string> {
    try {
      const created = await prisma.cart.create({ data });
      return created ?? "error";
    } catch {
      return "error";
    }
  }

  async updateCart(data: updateCartDto): Promise<cartDto | string> {
    try {
      const updated = await prisma.cart.update({
        where: { id: data.id },
        data,
      });
      return updated ?? "error";
    } catch {
      return "error";
    }
  }

  async deleteCart(id: string): Promise<string> {
    try {
      const deleted = await prisma.cart.delete({ where: { id } });
      return deleted ? "success" : "error";
    } catch {
      return "error";
    }
  }

  async getByUserId(userId: string): Promise<cartDto[] | string> {
    try {
      const carts = await prisma.cart.findMany({ where: { userId } });
      return carts.length > 0 ? carts : "error";
    } catch {
      return "error";
    }
  }

  async getByCartId(cartId: string): Promise<cartDto | string> {
    try {
      const cart = await prisma.cart.findUnique({ where: { id: cartId } });
      return cart ?? "error";
    } catch {
      return "error";
    }
  }

  async getAllCarts(): Promise<cartDto[] | string> {
    try {
      const carts = await prisma.cart.findMany();
      return carts.length > 0 ? carts : "error";
    } catch {
      return "error";
    }
  }
}
