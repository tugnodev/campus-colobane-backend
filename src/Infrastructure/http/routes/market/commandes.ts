import { Hono } from "hono";
import { OrderController } from "../../controllers/orderController.js";
import { OrderRepoImpl } from "../../../repositories/orderRepoImpl.js";
import { OrderUseCase } from "../../../../Application/usecases/orderUseCase.js";

const OrderRepo = new OrderRepoImpl();
const commandeUseCase = new OrderUseCase(OrderRepo);
const commandeController = new OrderController(commandeUseCase);

export const commandeRoutes = new Hono();
commandeRoutes.post("/commandes", async (c) => {
  await commandeController.create(c);
});
commandeRoutes.put("/commandes/:id", async (c) => {
  await commandeController.update(c);
});
commandeRoutes.delete("/commandes/:id", async (c) => {
  await commandeController.delete(c);
});

commandeRoutes.get("/commandes/:SellerId", async (c) => {
  await commandeController.getBySellerId(c);
});
commandeRoutes.get("/commandes/:BuyerId", async (c) => {
  await commandeController.getByBuyerId(c);
});
