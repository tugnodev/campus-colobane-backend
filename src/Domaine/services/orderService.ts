import type { IOrderService } from '../ports/inputs/orderService.js';
import type { createOrderDto, updateOrderDto, orderDto } from '../../Application/dtos/order.js';
import type { OOrderRepo } from '../ports/outputs/orderRepo.js';


export class OrderService implements IOrderService {
    private orderRepo: OOrderRepo;

    constructor(orderRepo: OOrderRepo) {
        this.orderRepo = orderRepo; 
    }

    async createOrder(newOrder: createOrderDto): Promise<orderDto | string> {
        return this.orderRepo.saveOrder(newOrder);
    }

    async updateOrder(order: updateOrderDto): Promise<orderDto | string> {
        return this.orderRepo.updateOrder(order);
    }

    async deleteOrder(id: string): Promise<string> {
        return this.orderRepo.deleteOrder(id);
    }

    async getOrdersByBuyerId(buyerId: string): Promise<orderDto[] | string> {
        return this.orderRepo.getOrdersByBuyerId(buyerId);
    }

    async getOrdersBySellerId(sellerId: string): Promise<orderDto[] | string> {
        return this.orderRepo.getOrdersBySellerId(sellerId);
    }
}