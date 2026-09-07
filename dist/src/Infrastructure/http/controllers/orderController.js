import { OrderUseCase } from "../../../Application/usecases/orderUseCase.js";
export class OrderController {
    orderUseCase;
    constructor(orderUseCase) {
        this.orderUseCase = orderUseCase;
    }
    async create(ctx) {
        const orderData = await ctx.req.json();
        const result = await this.orderUseCase.create(orderData);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
    async update(ctx) {
        const orderData = await ctx.req.json();
        const result = await this.orderUseCase.update(orderData);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
    async delete(ctx) {
        const { id } = await ctx.req.json();
        const result = await this.orderUseCase.delete(id);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json({ message: result });
    }
    async getByBuyerId(ctx) {
        const buyerId = ctx.req.param("buyerId");
        const result = await this.orderUseCase.getByBuyerId(buyerId);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
    async getBySellerId(ctx) {
        const sellerId = ctx.req.param("sellerId");
        const result = await this.orderUseCase.getBySellerId(sellerId);
        if (typeof result === "string") {
            return ctx.json({ message: "erreur fetching" }, 400);
        }
        return ctx.json(result);
    }
}
