import { OrderUseCase } from "../../Application/usecases/orderUseCase.js";
import type {
  createOrderDto,
  updateOrderDto,
} from "../../Application/dtos/order.js";
import type { Context } from "hono";

export class OrderController {
  private orderUseCase: OrderUseCase;

  constructor(orderUseCase: OrderUseCase) {
    this.orderUseCase = orderUseCase;
  }

  async create(ctx: Context) {
    const orderData: createOrderDto = await ctx.req.json();
    //const json = JSON.stringify(orderData.articleDetails);
    console.log(orderData);
    const result = await this.orderUseCase.create(orderData);
    console.log(result);
    if (typeof result === "string") {
      console.log("check");
      return ctx.json({ message: result });
    }
    return ctx.json(result);
  }

  async update(ctx: Context) {
    const orderData: updateOrderDto = await ctx.req.json();
    const result = await this.orderUseCase.update(orderData);
    if (typeof result === "string") {
      console.log(`Erreur: ${result}`);
      return ctx.text(result);
    }
    return ctx.json(result);
  }

  async delete(ctx: Context) {
    const { id } = ctx.req.param();
    console.log(`Deleting order with id: ${id}`);
    const result = await this.orderUseCase.delete(id);
    return result;
  }

  async getByBuyerId(ctx: Context) {
    const params = ctx.req.param();
    console.log(JSON.stringify(params));
    const result = await this.orderUseCase.getByBuyerId(params.buyerId);
    if (typeof result === "string") {
      return ctx.json({ message: result });
    }
    return ctx.json(result);
  }

  async getBySellerId(ctx: Context) {
    const sellerId = ctx.req.param("sellerId");
    const result = await this.orderUseCase.getBySellerId(sellerId);
    if (typeof result === "string") {
      return ctx.json({ message: "erreur fetching" }, 400);
    }
    return ctx.json(result);
  }
}
