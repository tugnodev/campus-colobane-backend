import { OrderUseCase } from "../../../Application/usecases/orderUseCase.js";
import type { createOrderDto, updateOrderDto } from "../../../Application/dtos/order.js";
import type { Context } from "hono";

export class OrderController {
    constructor(private orderUseCase: OrderUseCase) {}

    async create(ctx: Context) {
        const orderData: createOrderDto = await ctx.req.json();
        const result = await this.orderUseCase.create(orderData);
        ctx.json(result);
    }

    async update(ctx: Context) {
        const orderData: updateOrderDto = await ctx.req.json();
        const result = await this.orderUseCase.update(orderData);
        ctx.json(result);
    }

    async delete(ctx: Context) {
        const orderId = ctx.req.param("id");
        const result = await this.orderUseCase.delete(orderId);
        ctx.json(result);
    }

    async getByBuyerId(ctx: Context) {
        const buyerId = ctx.req.param("buyerId");
        const result = await this.orderUseCase.getByBuyerId(buyerId);
        ctx.json(result);
    }

    async getBySellerId(ctx: Context) {
        const sellerId = ctx.req.param("sellerId");
        const result = await this.orderUseCase.getBySellerId(sellerId);
        ctx.json(result);
    }
}
