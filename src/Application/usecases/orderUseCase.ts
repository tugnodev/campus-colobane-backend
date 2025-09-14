import type { IOrderService } from '../../Domaine/ports/inputs/orderService.js';
import type { createOrderDto, updateOrderDto, orderDto } from '../dtos/order.js';

export class OrderUseCase {
    private orderService: IOrderService;

    constructor(orderService: IOrderService) {
        this.orderService = orderService;
    }

    async create(orderData: createOrderDto): Promise<orderDto | string> {
        if (!orderData.article_details) {
            return 'Article details are required.';
        }
        return this.orderService.createOrder(orderData);
    }

    async update(orderData: updateOrderDto): Promise<orderDto | string> {
        const existingOrder = await this.orderService.getOrdersByBuyerId(orderData.id.toString());
        if (!existingOrder || existingOrder.length === 0) {
            return `Order with ID ${orderData.id} does not exist.`;
        }
        return this.orderService.updateOrder(orderData);
    }

    async delete(orderId: string): Promise<string> {
        await this.orderService.deleteOrder(orderId);
        return `Order with ID ${orderId} has been deleted successfully.`;
    }

    async getByBuyerId(buyerId: string): Promise<orderDto[] | string> {
        return this.orderService.getOrdersByBuyerId(buyerId);
    }

    async getBySellerId(sellerId: string): Promise<orderDto[] | string> {
        return this.orderService.getOrdersBySellerId(sellerId);
    }
}
