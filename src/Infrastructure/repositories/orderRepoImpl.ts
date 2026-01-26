import { PrismaClient } from "../../generated/prisma/index.js";
import type { OOrderRepo } from "../../Domaine/ports/outputs/orderRepo.js";
import type { createOrderDto, updateOrderDto } from "../../Application/dtos/order.js";
import type { Order as OrderEntity } from "../../Domaine/entities/orders.js";

const prisma = new PrismaClient();

export class OrderRepoImpl implements OOrderRepo {

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

      const orderEntity: OrderEntity = {
        ...created,
        order_date: created.createdAt, // Date
        createdAt: created.createdAt,  // Date
        updatedAt: created.updatedAt,  // Date
      };

      return orderEntity;

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

      const orderEntity: OrderEntity = {
        ...updated,
        order_date: updated.createdAt,
        createdAt: updated.createdAt,
        updatedAt: updated.updatedAt,
      };

      return orderEntity;

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
      return "Error deleting order";
    }
  }

  async getOrdersByBuyerId(buyerId: string): Promise<OrderEntity[] | string> {
    try {
      const orders = await prisma.orders.findMany({
        where: { buyer_id: buyerId },
        orderBy: { createdAt: "desc" },
      });

      const mappedOrders: OrderEntity[] = orders.map(o => ({
        ...o,
        order_date: o.createdAt,
        createdAt: o.createdAt,
        updatedAt: o.updatedAt,
      }));

      return mappedOrders;

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

      const mappedOrders: OrderEntity[] = orders.map(o => ({
        ...o,
        order_date: o.createdAt,
        createdAt: o.createdAt,
        updatedAt: o.updatedAt,
      }));

      return mappedOrders;

    } catch (error) {
      console.error(error);
      return "Error fetching orders by seller";
    }
  }
}
