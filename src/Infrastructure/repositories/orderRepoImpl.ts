import { PrismaClient } from "../../generated/prisma/index.js";
import type { OOrderRepo } from "../../Domaine/ports/outputs/orderRepo.js";
import type {
  createOrderDto,
  updateOrderDto,
} from "../../Application/dtos/order.js";
import type { Order as OrderEntity } from "../../Domaine/entities/orders.js";

const prisma = new PrismaClient();

export class OrderRepoImpl implements OOrderRepo {
  // Petit helper pour éviter la répétition du mapping
  private mapToEntity(dbOrder: any): OrderEntity {
    return {
      ...dbOrder,
      order_date: dbOrder.createdAt,
      createdAt: dbOrder.createdAt,
      updatedAt: dbOrder.updatedAt,
    };
  }

  async saveOrder(order: createOrderDto): Promise<OrderEntity | string> {
    try {
      const created = await prisma.orders.create({
        data: {
          article_details: order.article_details,
          buyer_id: order.buyer_id,
          seller_id: order.seller_id,
          order_status: "accepted",
        },
      });
      return this.mapToEntity(created);
    } catch (error) {
      console.error(error);
      return "Error creating order";
    }
  }

  async updateOrder(order: updateOrderDto): Promise<OrderEntity | string> {
    try {
      const { id, ...data } = order;
      const updated = await prisma.orders.update({
        where: { id },
        data,
      });
      return this.mapToEntity(updated);
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

  async getOrdersByBuyerId(buyerId: string): Promise<OrderEntity[] | string> {
    try {
      const orders = await prisma.orders.findMany({
        where: { buyer_id: buyerId },
        orderBy: { createdAt: "desc" },
      });
      return orders.map(this.mapToEntity);
    } catch (error) {
      console.error(error);
      return "Error fetching orders by buyer";
    }
  }

  async getOrdersBySellerId(sellerId: string): Promise<OrderEntity[] | string> {
    try {
      const orders = await prisma.orders.findMany({
        where: { seller_id: sellerId },
        orderBy: { createdAt: "desc" },
      });
      return orders.map(this.mapToEntity);
    } catch (error) {
      console.error(error);
      return "Error fetching orders by seller";
    }
  }
}
