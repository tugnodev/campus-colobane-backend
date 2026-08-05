import { PrismaClient } from "../../../prisma/generated/prisma/index.js";
import type { Carts } from "../../Domaine/entities/carts.js";
import type { OCartRepo } from "../../Domaine/ports/outputs/cartRepo.js";
import type {
  createCartDto,
  updateCartDto,
} from "../../Application/dtos/cart.js";

const prisma = new PrismaClient();

export class CartRepoImpl implements OCartRepo {
  async createCart(cart: createCartDto): Promise<Carts | string> {
    try {
      const created = await prisma.carts.create({
        data: {
          cart: cart.cart || [],
          userId: cart.userId,
        },
      });
      return created;
    } catch (error) {
      console.error(error);
      return "Erreur lors de la création du panier";
    }
  }

  async updateCart(cart: updateCartDto): Promise<Carts | string> {
    try {
      const { userId, ...data } = cart;
      const updated = await prisma.carts.update({
        where: { userId },
        data: {
          cart: data.cart,
        },
      });
      return updated;
    } catch (error) {
      console.error(error);
      return "Erreur lors de la mise à jour du panier";
    }
  }

  async deleteCart(userId: string): Promise<string> {
    try {
      await prisma.carts.delete({ where: { userId } });
      return "Panier supprimé avec succès";
    } catch (error) {
      console.error(error);
      return "Erreur lors de la suppression du panier";
    }
  }

  async getByUserId(userId: string): Promise<Carts | string> {
    try {
      const cart = await prisma.carts.findUnique({
        where: { userId },
      });
      if (cart === null) return "Panier non trouvé";
      return cart;
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération des paniers par utilisateur";
    }
  }

  async getByCartId(cartId: string): Promise<Carts | string> {
    try {
      const cart = await prisma.carts.findUnique({ where: { userId: cartId } });
      if (!cart) {
        return "Panier non trouvé";
      }
      return cart;
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération du panier par ID";
    }
  }

  async getAllCarts(): Promise<Carts[] | string> {
    try {
      const carts = await prisma.carts.findMany();
      return carts.length > 0 ? carts : "Aucun panier trouvé";
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération de tous les paniers";
    }
  }
}
