import { db } from "../../db/index.js";
import { carts } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import type { Carts } from "../../Domaine/entities/carts.js";
import type { OCartRepo } from "../../Domaine/ports/outputs/cartRepo.js";
import type {
  createCartDto,
  updateCartDto,
} from "../../Application/dtos/cart.js";

export class CartRepoImpl implements OCartRepo {
  async createCart(cart: createCartDto): Promise<Carts | string> {
    try {
      const [created] = await db
        .insert(carts)
        .values({
          userId: cart.userId,
          cart: cart.cart || [],
        })
        .returning();
      return created;
    } catch (error) {
      console.error(error);
      return "Erreur lors de la création du panier";
    }
  }

  async updateCart(cart: updateCartDto): Promise<Carts | string> {
    try {
      const { userId, ...data } = cart;
      const [updated] = await db
        .update(carts)
        .set({ cart: data.cart })
        .where(eq(carts.userId, userId))
        .returning();

      if (!updated) return "Panier non trouvé";
      return updated;
    } catch (error) {
      console.error(error);
      return "Erreur lors de la mise à jour du panier";
    }
  }

  async deleteCart(userId: string): Promise<string> {
    try {
      const [deleted] = await db
        .delete(carts)
        .where(eq(carts.userId, userId))
        .returning();

      if (!deleted) return "Panier non trouvé";
      return "Panier supprimé avec succès";
    } catch (error) {
      console.error(error);
      return "Erreur lors de la suppression du panier";
    }
  }

  async getByUserId(userId: string): Promise<Carts | string> {
    try {
      const cart = await db.selectDistinct().from(carts).where(eq(carts.userId, userId))
      if (!cart) return "Panier non trouvé";
      return cart[0];
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération des paniers par utilisateur";
    }
  }

  async getByCartId(cartId: string): Promise<Carts | string> {
    try {
      const cart = await db.selectDistinct().from(carts).where(eq(carts.userId, cartId));
      if (!cart) return "Panier non trouvé";
      return cart[0];
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération du panier par ID";
    }
  }

  async getAllCarts(): Promise<Carts[] | string> {
    try {
      const result = await db.select().from(carts);
      return result.length > 0 ? result : "Aucun panier trouvé";
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération de tous les paniers";
    }
  }
}
