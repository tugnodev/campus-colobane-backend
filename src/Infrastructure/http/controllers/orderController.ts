import { OrderUseCase } from "../../../Application/usecases/orderUseCase.js";
import type { createOrderDto, updateOrderDto } from "../../../Application/dtos/order.js";
import type { Context } from "hono";

export class OrderController {
    private orderUseCase: OrderUseCase;

    constructor(orderUseCase: OrderUseCase) {
        this.orderUseCase = orderUseCase;
    }

    async create(ctx: Context) {
        const orderData: createOrderDto = await ctx.req.json();
        const result = await this.orderUseCase.create(orderData);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }

    async update(ctx: Context) {
        const orderData: updateOrderDto = await ctx.req.json();
        const result = await this.orderUseCase.update(orderData);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }

    async delete(ctx: Context) {
        const { id } = await ctx.req.json();
        const result = await this.orderUseCase.delete(id);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json({ message: result });
    }

    async getByBuyerId(ctx: Context) {
        const buyerId = ctx.req.param("buyerId");
        const result = await this.orderUseCase.getByBuyerId(buyerId);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }

    async getBySellerId(ctx: Context) {
        const sellerId = ctx.req.param("sellerId");
        const result = await this.orderUseCase.getBySellerId(sellerId);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
}
