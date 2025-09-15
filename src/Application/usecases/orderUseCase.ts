import type { OOrderRepo } from "../../Domaine/ports/outputs/orderRepo.js";
import type { createOrderDto, updateOrderDto, orderDto } from '../dtos/order.js';

export class OrderUseCase {
    private orderRepo: OOrderRepo;

    constructor(orderRepo: OOrderRepo) {
        this.orderRepo = orderRepo;
    }

    async create(orderData: createOrderDto): Promise<orderDto | string> {
        if (!orderData.article_details) {
            return 'Article details are required.';
        }
        return this.orderRepo.saveOrder(orderData);
    }

    async update(orderData: updateOrderDto): Promise<orderDto | string> {
        const existingOrder = await this.orderRepo.getOrdersByBuyerId(orderData.id.toString());
        if (!existingOrder || existingOrder.length === 0) {
            return `Order with ID ${orderData.id} does not exist.`;
        }
        return this.orderRepo.updateOrder(orderData);
    }

    async delete(orderId: string): Promise<string> {
        await this.orderRepo.deleteOrder(orderId);
        return `Order with ID ${orderId} has been deleted successfully.`;
    }

    async getByBuyerId(buyerId: string): Promise<orderDto[] | string> {
        return this.orderRepo.getOrdersByBuyerId(buyerId);
    }

    async getBySellerId(sellerId: string): Promise<orderDto[] | string> {
        return this.orderRepo.getOrdersBySellerId(sellerId);
    }
}
