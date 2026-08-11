import { Hono } from "hono";
import { OrderController } from "../../../controllers/orderController.js";
import { OrderRepoImpl } from "../../../repositories/orderRepoImpl.js";
import { OrderUseCase } from "../../../../Application/usecases/orderUseCase.js";
import { validateJson } from "../../../middleware/valideSchema.js";
import { createOrderSchema, updateOrderSchema } from "../../../config/schema/index.js";

const orderRepo = new OrderRepoImpl();
const orderUseCase = new OrderUseCase(orderRepo);
const orderController = new OrderController(orderUseCase);

export const orderRoutes = new Hono();

orderRoutes.post("/", validateJson(createOrderSchema), async (c) => {
  const orderData = c.req.valid("json");
  const result = await orderController.create(orderData);
  return c.json(result);
});

orderRoutes.patch("/", validateJson(updateOrderSchema), async (c) => {
  const orderData = c.req.valid("json");
  const result = await orderController.update(orderData);
  return c.json(result);
});

orderRoutes.delete("/:id", async (c) => {
  const id = c.req.param("id");
  const result = await orderController.delete(id);
  return c.json(result);
});

orderRoutes.get("/user/:sellerId", async (c) => {
  const sellerId = c.req.param("sellerId");
  const result = await orderController.getBySellerId(sellerId);
  return c.json(result);
});

orderRoutes.get("/:buyerId", async (c) => {
  const buyerId = c.req.param("buyerId");
  const result = await orderController.getByBuyerId(buyerId);
  return c.json(result);
});
