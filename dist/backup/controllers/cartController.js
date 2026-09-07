import { CartUseCase } from "../../../Application/usecases/cartUseCase.js";
export class CartController {
    cartUseCase;
    constructor(cartUseCase) {
        this.cartUseCase = cartUseCase;
    }
    async create(ctx) {
        const cardData = await ctx.req.json();
        const result = await this.cartUseCase.create(cardData);
        ctx.json(result);
    }
    async update(ctx) {
        const cardData = await ctx.req.json();
        const result = await this.cartUseCase.update(cardData);
        ctx.json(result);
    }
    async delete(ctx) {
        const cardId = ctx.req.param("id");
        const result = await this.cartUseCase.delete(cardId);
        ctx.json(result);
    }
    async getByUserId(ctx) {
        const userId = ctx.req.param("userId");
        const result = await this.cartUseCase.getByUserId(userId);
        ctx.json(result);
    }
}
