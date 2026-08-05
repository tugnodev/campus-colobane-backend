export class OrderService {
    orderRepo;
    constructor(orderRepo) {
        this.orderRepo = orderRepo;
    }
    async createOrder(newOrder) {
        return this.orderRepo.saveOrder(newOrder);
    }
    async updateOrder(order) {
        return this.orderRepo.updateOrder(order);
    }
    async deleteOrder(id) {
        return this.orderRepo.deleteOrder(id);
    }
    async getOrdersByBuyerId(buyerId) {
        return this.orderRepo.getOrdersByBuyerId(buyerId);
    }
    async getOrdersBySellerId(sellerId) {
        return this.orderRepo.getOrdersBySellerId(sellerId);
    }
}
