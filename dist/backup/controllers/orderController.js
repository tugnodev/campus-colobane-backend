import { OrderUseCase } from "../../../Application/usecases/orderUseCase.js";
export class OrderController {
    orderUseCase;
    constructor(orderUseCase) {
        this.orderUseCase = orderUseCase;
    }
    async create(ctx) {
        const orderData = await ctx.req.json();
        const result = await this.orderUseCase.create(orderData);
        ctx.json(result);
    }
    async update(ctx) {
        const orderData = await ctx.req.json();
        const result = await this.orderUseCase.update(orderData);
        ctx.json(result);
    }
    async delete(ctx) {
        const orderId = ctx.req.param("id");
        const result = await this.orderUseCase.delete(orderId);
        ctx.json(result);
    }
    async getByBuyerId(ctx) {
        const buyerId = ctx.req.param("buyerId");
        const result = await this.orderUseCase.getByBuyerId(buyerId);
        ctx.json(result);
    }
    async getBySellerId(ctx) {
        const sellerId = ctx.req.param("sellerId");
        const result = await this.orderUseCase.getBySellerId(sellerId);
        ctx.json(result);
    }
}
