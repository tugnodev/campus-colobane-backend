import { CartUseCase } from "../../../Application/usecases/cartUseCase.js";
export class CartController {
    cartUseCase;
    constructor(cartUseCase) {
        this.cartUseCase = cartUseCase;
    }
    async createCart(ctx) {
        const cartData = await ctx.req.json();
        const result = await this.cartUseCase.createCart(cartData);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
    async deleteCart(ctx) {
        const { id } = await ctx.req.json();
        const result = await this.cartUseCase.deleteCart(id);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
    async updateCart(ctx) {
        const cartData = await ctx.req.json();
        const result = await this.cartUseCase.updateCart(cartData);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
    async getByUserId(ctx) {
        const id = ctx.req.param("id");
        console.log(id);
        const result = await this.cartUseCase.getByUserId(id);
        console.log(result);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
    async getAllCarts(ctx) {
        const result = await this.cartUseCase.getAllCarts();
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
}
