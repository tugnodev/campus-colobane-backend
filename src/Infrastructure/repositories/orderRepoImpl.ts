import { db } from "../../db/index.js";
import { orders, orderItems, articles } from "../../db/schema.js";
import { eq, desc, inArray } from "drizzle-orm";
import type { OOrderRepo } from "../../Domaine/ports/outputs/orderRepo.js";
import { ArticleRepoImpl } from "./articleRepoImpl.js";
import type {
  createOrderDto,
  updateOrderDto,
} from "../../Application/dtos/order.js";
import type { Order } from "../../Domaine/entities/orders.js";
import { OrderStatus } from "../../Domaine/entities/orders.js";
import type { Articles } from "../../Domaine/entities/articles.js";

const articleRepo = new ArticleRepoImpl();
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
        .set({ status: data!.status })
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

  async getOrdersByBuyerId(buyerId: string): Promise<Order[] | string> {orderItems
    try {
      const result = await db.select().from(orders).where(eq(orders.buyerId, buyerId)).leftJoin(orderItems, eq(orders.id, orderItems.orderId));
      return result.map((result) => {
        return {
          id: result.Orders.id,
          buyerId: result.Orders.buyerId,
          sellerId: result.Orders.sellerId,
          items: [
            {
              articleId: result.OrderItems!.articleId,
              quantity: result.OrderItems!.quantity,
            }
          ],
          status: result.Orders.status,
          createdAt: result.Orders.createdAt,
          updatedAt: result.Orders.updatedAt,
        }
      });
    } catch (error) {
      console.error(error);
      return "Error fetching orders by buyer";
    }
  }

  async getOrdersBySellerId(sellerId: string): Promise<Order[] | string> {
    try {
      const ordersResult = await db.select().from(orders).where(eq(orders.sellerId, sellerId));
      const orderItemsResult = await db.select().from(orderItems).where(inArray(orderItems.orderId, ordersResult.map((order) => order.id)));
      const result = ordersResult.map((order) => {
        return {
          Orders: order,
          OrderItems: orderItemsResult.find((orderItem) => orderItem.orderId === order.id),
        }
      });
      return result.map((result) => {
        return {
          id: result.Orders.id,
          buyerId: result.Orders.buyerId,
          sellerId: result.Orders.sellerId,
          items: [
            {
              articleId: result.OrderItems!.articleId,
              quantity: result.OrderItems!.quantity,
            }
          ],
          status: result.Orders.status,
          createdAt: result.Orders.createdAt,
          updatedAt: result.Orders.updatedAt,
        }
      });
    } catch (error) {
      console.error(error);
      return "Error fetching orders by seller";
    }
  }
}
