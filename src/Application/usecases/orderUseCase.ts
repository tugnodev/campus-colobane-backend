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
    if (!orderData.items) {
      return "Article details are required.";
    }
    return this.orderRepo.saveOrder(orderData);
  }

  async update(orderData: updateOrderDto): Promise<Order | string> {
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
