import type { OOrderRepo } from "../../Domaine/ports/outputs/orderRepo.js";
import type { IOrderService } from "../../Domaine/ports/inputs/orderService.js";
import type { Order } from "../../Domaine/entities/orders.js";
import type { createOrderDto, updateOrderDto } from "../dtos/order.js";

export class OrderUseCase {
  private orderRepo: OOrderRepo;

  constructor(orderRepo: OOrderRepo) {
    this.orderRepo = orderRepo;
  }

  async create(orderData: createOrderDto): Promise<Order | string> {
    if (!orderData.articleDetails) {
      return "Article details are required.";
    }
    return this.orderRepo.saveOrder(orderData);
  }

  async update(orderData: updateOrderDto): Promise<Order | string> {
    const existingOrder = await this.orderRepo.getOrdersByBuyerId(
      orderData.id.toString(),
    );
    if (!existingOrder || existingOrder.length === 0) {
      return `Order with ID ${orderData.id} does not exist.`;
    }
    return this.orderRepo.updateOrder(orderData);
  }

  async delete(orderId: string): Promise<string> {
    return this.orderRepo.deleteOrder(orderId);
  }

  async getByBuyerId(buyerId: string): Promise<Order[] | string> {
    return this.orderRepo.getOrdersByBuyerId(buyerId);
  }

  async getBySellerId(sellerId: string): Promise<Order[] | string> {
    return this.orderRepo.getOrdersBySellerId(sellerId);
  }
}
