import type {
  createOrderDto,
  updateOrderDto,
} from "../../../Application/dtos/order.js";
import { type Order } from "../../entities/orders.js";

export interface OOrderRepo {
  saveOrder(order: createOrderDto): Promise<Order | string>;
  updateOrder(order: updateOrderDto): Promise<Order | string>;
  deleteOrder(id: string): Promise<string>;
  getOrdersByBuyerId(buyerId: string): Promise<Order[] | string>;
  getOrdersBySellerId(sellerId: string): Promise<Order[] | string>;
}
