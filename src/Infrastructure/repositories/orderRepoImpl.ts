import type { OOrderRepo } from "../../Domaine/ports/outputs/orderRepo.js";
import type {
  createOrderDto,
  updateOrderDto,
  orderDto,
} from "../../Application/dtos/order.js";
import { PrismaClient } from "@prisma/client/extension";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

const prisma = new PrismaClient();

export class OrderRepoImpl implements OOrderRepo {
  async saveOrder(order: createOrderDto): Promise<orderDto | string> {
    try {
      const createOrder = await prisma.orders.create({
        data: {
          article_details: order.article_details as unknown as object,
          buyer_id: order.buyer_id,
          seller_id: order.seller_id,
        },
      });

      if (!createOrder) return "Error while creating order";
      return createOrder as unknown as orderDto;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "Error Fecthing ";
      }
      return "Error to Fecth Order";
    }
  }

  async updateOrder(order: updateOrderDto): Promise<orderDto | string> {
    try {
      const exist = await prisma.orders.findUnique({ where: { id: order.id } });
      if (!exist) return "Order with " + order.id + " does not exist";

      const updated = await prisma.orders.update({
        where: { id: order.id },
        data: {
          article_details: order.article_details as unknown as
            | object
            | undefined,
          buyer_id: order.buyer_id,
          seller_id: order.seller_id,
          order_status: (order as any).order_status as string | undefined,
        },
      });

      if (!updated) return "Error while updating order";
      return updated as unknown as orderDto;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "Error Updating Order";
      }
      return "Error while updating order";
    }
  }

  async deleteOrder(id: string): Promise<string> {
    try {
      const exist = await prisma.orders.findUnique({ where: { id } });
      if (!exist) return "Order with ID does not exist";
      await prisma.orders.delete({ where: { id } });
      return "Order deleted with success";
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "Error Deleting Order";
      }
      return "Error while deleting order";
    }
  }

  async getOrdersByBuyerId(buyerId: string): Promise<orderDto[] | string> {
    try {
      const orders = await prisma.orders.findMany({
        where: { buyer_id: buyerId },
      });
      if (!orders || orders.length === 0)
        return "No orders found for this buyer";
      return orders as unknown as orderDto[];
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "Error Fetching Orders";
      }
      return "Error while fetching orders for buyer";
    }
  }

  async getOrdersBySellerId(sellerId: string): Promise<orderDto[] | string> {
    try {
      const orders = await prisma.orders.findMany({
        where: { seller_id: sellerId },
      });
      if (!orders || orders.length === 0)
        return "No orders found for this seller";
      return orders as unknown as orderDto[];
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "Error Fetching Orders";
      }
      return "Error while fetching orders for seller";
    }
  }
}
