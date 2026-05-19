import { PrismaClient } from "../../../prisma/generated/prisma/index.js";
import type { OOrderRepo } from "../../Domaine/ports/outputs/orderRepo.js";
import type {
  createOrderDto,
  updateOrderDto,
} from "../../Application/dtos/order.js";
import type { Order } from "../../Domaine/entities/orders.js";
import { OrderStatus } from "../../Domaine/entities/orders.js";

const prisma = new PrismaClient();

export class OrderRepoImpl implements OOrderRepo {
  async saveOrder(order: createOrderDto): Promise<Order | string> {
    try {
      const newOrder = await prisma.orders.create({
        data: {
          buyerId: order.buyerId,
          sellerId: order.sellerId,
          status: OrderStatus.ATTENTE,
        },
      });

      const items = await Promise.all(
        order.items.map(async (item) => {
          return await prisma.orderItems.create({
            data: {
              orderId: newOrder.id,
              articleId: item.articleId,
              quantity: item.quantity,
            },
            omit: {
              orderId: true,
            },
          });
        }),
      );
      return {
        ...newOrder,
        items: items,
      };
    } catch (error) {
      console.error(error);
      return "Error creating order";
    }
  }

  async updateOrder(order: updateOrderDto): Promise<Order | string> {
    try {
      const { id, ...data } = order;
      const updated = await prisma.orders.update({
        where: { id },
        data: {
          status: data.status,
        },
        include: { items: true },
      });

      return updated;
    } catch (error) {
      console.error(error);
      return "Error updating order";
    }
  }

  async deleteOrder(id: string): Promise<string> {
    try {
      await prisma.orders.delete({ where: { id } });
      return "Order deleted successfully";
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }

  async getOrdersByBuyerId(buyerId: string): Promise<Order[] | string> {
    try {
      const orders = await prisma.orders.findMany({
        where: { buyerId },
        orderBy: { createdAt: "desc" },
        include: { items: { include: { article: true } } },
      });

      console.log(JSON.stringify(orders));
      return orders;
    } catch (error) {
      console.error(error);
      return "Error fetching orders by buyer";
    }
  }

  async getOrdersBySellerId(sellerId: string): Promise<Order[] | string> {
    try {
      const orders = await prisma.orders.findMany({
        where: { sellerId },
        orderBy: { createdAt: "desc" },
        include: { items: true },
      });
      return orders;
    } catch (error) {
      console.error(error);
      return "Error fetching orders by seller";
    }
  }
}
