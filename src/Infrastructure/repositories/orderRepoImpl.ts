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
      const created = await prisma.orders.create({
        data: {
          articleDetails: order.articleDetails,
          buyerId: order.buyerId,
          sellerId: order.sellerId,
          status: OrderStatus.ATTENTE,
        },
      });
      return created;
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
          articleDetails: data.articleDetails!,
          buyerId: data.buyerId!,
          sellerId: data.sellerId!,
          status: data.status!,
        },
      });
      return updated;
    } catch (error) {
      console.error(error);
      return "Error updating order";
    }
  }

  // CORRECTION ICI : Le type de retour doit être Promise<string>
  async deleteOrder(id: string): Promise<string> {
    try {
      await prisma.orders.delete({ where: { id } });
      return "Order deleted successfully";
    } catch (error) {
      console.error(error);
      return "Error deleting order";
    }
  }

  async getOrdersByBuyerId(buyerId: string): Promise<Order[] | string> {
    try {
      const orders = await prisma.orders.findMany({
        where: { buyerId },
        orderBy: { createdAt: "desc" },
      });
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
      });
      return orders;
    } catch (error) {
      console.error(error);
      return "Error fetching orders by seller";
    }
  }
}
