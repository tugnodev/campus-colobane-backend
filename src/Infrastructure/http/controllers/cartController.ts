import { CartUseCase } from "../../../Application/usecases/cartUseCase.js";
import type {
  createCartDto,
  updateCartDto,
} from "../../../Application/dtos/cart.ts";
import type { Context } from "hono";

export class CartController {
  private cartUseCase: CartUseCase;

  constructor(cartUseCase: CartUseCase) {
    this.cartUseCase = cartUseCase;
  }

  async createCart(ctx: Context) {
    const cartData: createCartDto = await ctx.req.json();
    const result = await this.cartUseCase.createCart(cartData);
    if (typeof result === "string") {
      return ctx.json({ message: result });
    }
    return ctx.json(result);
  }

  async deleteCart(ctx: Context) {
    const { id } = await ctx.req.json();
    const result = await this.cartUseCase.deleteCart(id);
    if (typeof result === "string") {
      return ctx.json({ message: result });
    }
    return ctx.json(result);
  }

  async updateCart(ctx: Context) {
    const cartData: updateCartDto = await ctx.req.json();
    console.log(cartData);
    const result = await this.cartUseCase.updateCart(cartData);
    if (typeof result === "string") {
      return ctx.json({ message: result });
    }
    return ctx.json(result);
  }

  async getByUserId(ctx: Context) {
    const id = ctx.req.param("id");
    console.log(id);
    const result = await this.cartUseCase.getByUserId(id);
    console.log(result);
    if (typeof result === "string") {
      return ctx.json({ message: result });
    }
    return ctx.json(result);
  }

  async getAllCarts(ctx: Context) {
    const result = await this.cartUseCase.getAllCarts();
    if (typeof result === "string") {
      return ctx.json({ message: result });
    }
    return ctx.json(result);
  }
}
