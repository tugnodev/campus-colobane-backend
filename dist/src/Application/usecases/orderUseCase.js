export class OrderUseCase {
    orderRepo;
    constructor(orderRepo) {
        this.orderRepo = orderRepo;
    }
    async create(orderData) {
        if (!orderData.articleDetails) {
            return "Article details are required.";
        }
        return this.orderRepo.saveOrder(orderData);
    }
    async update(orderData) {
        const existingOrder = await this.orderRepo.getOrdersByBuyerId(orderData.id.toString());
        if (!existingOrder || existingOrder.length === 0) {
            return `Order with ID ${orderData.id} does not exist.`;
        }
        return this.orderRepo.updateOrder(orderData);
    }
    async delete(orderId) {
        return this.orderRepo.deleteOrder(orderId);
    }
    async getByBuyerId(buyerId) {
        return this.orderRepo.getOrdersByBuyerId(buyerId);
    }
    async getBySellerId(sellerId) {
        return this.orderRepo.getOrdersBySellerId(sellerId);
    }
}
