import { db } from "../../db/index.js";
import { orders, orderItems } from "../../db/schema.js";
import { eq, desc } from "drizzle-orm";
import type { OOrderRepo } from "../../Domaine/ports/outputs/orderRepo.js";
import type {
  createOrderDto,
  updateOrderDto,
} from "../../Application/dtos/order.js";
import type { Order } from "../../Domaine/entities/orders.js";
import { OrderStatus } from "../../Domaine/entities/orders.js";

export class OrderRepoImpl implements OOrderRepo {
  async saveOrder(order: createOrderDto): Promise<Order | string> {
    try {
      const newOrder = await db.transaction(async (tx) => {
        const [created] = await tx
          .insert(orders)
          .values({
            buyerId: order.buyerId,
            sellerId: order.sellerId,
            status: OrderStatus.ATTENTE,
          })
          .returning();

        const items = await Promise.all(
          order.items.map((item) =>
            tx
              .insert(orderItems)
              .values({
                orderId: created.id,
                articleId: item.articleId,
                quantity: item.quantity,
              })
              .returning({
                articleId: orderItems.articleId,
                quantity: orderItems.quantity,
              })
              .then((rows) => rows[0]),
          ),
        );

        return { ...created, items };
      });

      return newOrder;
    } catch (error) {
      console.error(error);
      return "Error creating order";
    }
  }

  async updateOrder(order: updateOrderDto): Promise<Order | string> {
    try {
      const { id, ...data } = order;
      const [updated] = await db
        .update(orders)
        .set({ status: data.status })
        .where(eq(orders.id, id))
        .returning();

      if (!updated) return "Order non trouvée";

      const items = await db
        .select()
        .from(orderItems)
        .where(eq(orderItems.orderId, id));

      return { ...updated, items };
    } catch (error) {
      console.error(error);
      return "Error updating order";
    }
  }

  async deleteOrder(id: string): Promise<string> {
    try {
      const [deleted] = await db
        .delete(orders)
        .where(eq(orders.id, id))
        .returning();

      if (!deleted) return "Order non trouvée";
      return "Order deleted successfully";
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }

  async getOrdersByBuyerId(buyerId: string): Promise<Order[] | string> {
    try {
      const result = await db.query.orders.findMany({
        where: eq(orders.buyerId, buyerId),
        orderBy: [desc(orders.createdAt)],
        with: {
          items: {
            with: { article: true },
          },
        },
      });

      return result;
    } catch (error) {
      console.error(error);
      return "Error fetching orders by buyer";
    }
  }

  async getOrdersBySellerId(sellerId: string): Promise<Order[] | string> {
    try {
      const result = await db.query.orders.findMany({
        where: eq(orders.sellerId, sellerId),
        orderBy: [desc(orders.createdAt)],
        with: { items: true },
      });

      return result;
    } catch (error) {
      console.error(error);
      return "Error fetching orders by seller";
    }
  }
}
