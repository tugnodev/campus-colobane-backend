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
      const created: cartDto = await prisma.cart.create({ data });
      if (!created) return "error";
      return created;
    } catch (error) {
      return "error";
    }
  }
  async updateCart(data: updateCartDto): Promise<cartDto | string> {
    try {
      const updated: cartDto = await prisma.cart.update({
        where: { id: data.id },
        data,
      });
      if (!updated) return "error";
      return updated;
    } catch (error) {
      return "error";
    }
  }
  async deleteCart(id: string): Promise<string> {
    try {
      const deleted = await prisma.cart.delete({ where: { id } });
      if (!deleted) return "error";
      return "success";
    } catch (error) {
      return "error";
    }
  }
  async getByUserId(id: string): Promise<cartDto | string> {
    try {
      const cart = await prisma.cart.findUnique({ where: { userId: id } });
      if (!cart) return "error";
      return cart;
    } catch (error) {
      return "error";
    }
  }
}
