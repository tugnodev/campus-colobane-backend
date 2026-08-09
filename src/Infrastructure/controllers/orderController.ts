import { OrderUseCase } from "../../Application/usecases/orderUseCase.js";
import type {
  createOrderDto,
  updateOrderDto,
} from "../../Application/dtos/order.js";

export class OrderController {
  private orderUseCase: OrderUseCase;

  constructor(orderUseCase: OrderUseCase) {
    this.orderUseCase = orderUseCase;
  }

  async create(orderData: createOrderDto) {
    return this.orderUseCase.create(orderData);
  }

  async update(orderData: updateOrderDto) {
    return this.orderUseCase.update(orderData);
  }

  async delete(id: string) {
    return this.orderUseCase.delete(id);
  }

  async getByBuyerId(buyerId: string) {
    return this.orderUseCase.getByBuyerId(buyerId);
  }

  async getBySellerId(sellerId: string) {
    return this.orderUseCase.getBySellerId(sellerId);
  }
}