import { CartUseCase } from "../../../Application/usecases/cartUseCase.js";
import type {
  createCartDto,
  updateCartDto,
} from "../../../Application/dtos/cart.js";
import type { Context } from "hono";

export class CartController {
  constructor(private cartUseCase: CartUseCase) {}

  async createCart(ctx: Context) {
    const cartData: createCartDto = await ctx.req.json();
    const result = await this.cartUseCase.create(cartData);
    return ctx.json(result);
  }

  async updateCart(ctx: Context) {
    const cartData: updateCartDto = await ctx.req.json();
    const result = await this.cartUseCase.update(cartData);
    return ctx.json(result);
  }

  async deleteCart(ctx: Context) {
    const cardId = await ctx.req.json();
    const result = await this.cartUseCase.delete(cardId);
    return ctx.json(result);
  }

  async getByUserID(ctx: Context) {
    const id = ctx.req.param("cardId");
    const result = await this.cartUseCase.getByUserId(id);
    return ctx.json(result);
  }
}
