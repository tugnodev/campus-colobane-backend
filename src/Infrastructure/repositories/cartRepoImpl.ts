import { db } from "../../db/index.js";
import { articles, cartItems, carts } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import type { Carts } from "../../Domaine/entities/carts.js";
import type { OCartRepo } from "../../Domaine/ports/outputs/cartRepo.js";
import type {
  addToCartDto,
  createCartDto,
  deleteCartDto,
  updateCartDto,
} from "../../Application/dtos/cart.js";
import type { Items } from "../../Domaine/entities/orders.js";

export class CartRepoImpl implements OCartRepo {
  async createCart(cart: createCartDto): Promise<Carts | string> {
    try {
      const created = await db.insert(carts).values({
        userId: cart.userId
      }).returning();
      return {
        id: created[0].id,
        items: [],
        userId: created[0].userId,
      };
    } catch (error) {
      console.error(error);
      return "Erreur lors de la création du panier";
    }
  }

  async updateCart(data: updateCartDto): Promise<Carts | string> {
    try {
      const updated = await db
        .update(cartItems)
        .set({
          quantity: data.item.quantity,
        })
        .where(eq(cartItems.cartId, data.id) && eq(cartItems.articleId, data.item.articleId))

      const subQuery = db.select({
        id: articles.id,
        image: articles.images,
        name: articles.title,
        price: articles.price,
      }).from(articles).where(eq(articles.id, cartItems.articleId)).as("items");
      const items = await db.select().from(cartItems).innerJoin(subQuery, eq(cartItems.articleId, subQuery.id)).where(eq(cartItems.cartId, data.id));

      if (!updated) return "Panier non trouvé";
      return {
        id: data.id,
        items: items.map((item) => ({
          articleId: item.CartItems.articleId,
          image: item.items.image[0],
          name: item.items.name,
          price: item.items.price,
          quantity: item.CartItems.quantity,
        })),
        userId: data.userId,
      };
    } catch (error) {
      console.error(error);
      return "Erreur lors de la mise à jour du panier";
    }
  }

  async deleteCart(data: deleteCartDto): Promise<string> {
    try {
      const [deleted] = await db
        .delete(cartItems)
        .where(eq(cartItems.cartId, data.cartId) && eq(cartItems.articleId, data.articleId))
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
      const cart = await db.selectDistinct().from(carts).where(eq(carts.userId, userId));
      if (!cart) return "Panier non trouvé";
      const items = await db.select().from(cartItems).where(eq(cartItems.cartId, cart[0].userId));
      const itemsDetails = await Promise.all(items.map(async (item) => {
        const article = await db.select().from(articles).where(eq(articles.id, item.articleId));
        return {
          articleId: article[0].id,
          name: article[0].title,
          price: article[0].price,
          image: article[0].images[0],
          quantity: item.quantity,
        };
      }));
      return {
        id: cart[0].id,
        items: itemsDetails,
        userId: cart[0].userId,
      };
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération du panier";
    }
  }

  async addToCart(data: addToCartDto): Promise<string> {
    try {
      const add = await db.insert(cartItems).values({
        cartId: data.cartId,
        articleId: data.articleId,
        quantity: data.quantity,
      }).returning();
      if (!add) return "Erreur lors de l'ajout de l'article au panier";
      return "Article ajouté au panier avec succès";
    } catch (error) {
      console.error(error);
      return "Erreur lors de l'ajout de l'article au panier";
    }
  }
}
