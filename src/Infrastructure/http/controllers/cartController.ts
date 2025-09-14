import { CartUseCase } from "../../../Application/usecases/cartUseCase.js";
import type { createCardDto, updateCardDto } from "../../../Application/dtos/cart.js";
import type { Context } from "hono";

export class CartController {
    constructor(private cartUseCase: CartUseCase) {}

    async create(ctx: Context) {
        const cardData: createCardDto = await ctx.req.json();
        const result = await this.cartUseCase.create(cardData);
        ctx.json(result);
    }

    async update(ctx: Context) {
        const cardData: updateCardDto = await ctx.req.json();
        const result = await this.cartUseCase.update(cardData);
        ctx.json(result);
    }

    async delete(ctx: Context) {
        const cardId = ctx.req.param("id");
        const result = await this.cartUseCase.delete(cardId);
        ctx.json(result);
    }

    async getByUserId(ctx: Context) {
        const userId = ctx.req.param("userId");
        const result = await this.cartUseCase.getByUserId(userId);
        ctx.json(result);
    }
}
