import type { createOrderDto, updateOrderDto, orderDto } from "../../../Application/dtos/order.js";

export interface OOrderRepo {
    saveOrder(order: createOrderDto): Promise<orderDto | string>;
    updateOrder(order: updateOrderDto): Promise<orderDto | string>;
    deleteOrder(id: string): Promise<string>;
    getOrdersByBuyerId(buyerId: string): Promise<orderDto[] | string>;
    getOrdersBySellerId(sellerId: string): Promise<orderDto[] | string>;
}