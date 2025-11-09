import { Hono } from "hono";
import { OrderController } from "../../controllers/orderController.js";
import { OrderRepoImpl } from "../../../repositories/orderRepoImpl.js";
import { OrderUseCase } from "../../../../Application/usecases/orderUseCase.js";

const OrderRepo = new OrderRepoImpl();
const CommandeUseCase = new OrderUseCase(OrderRepo);
const CommandeController = new OrderController(CommandeUseCase);

export const CommandeRoutes = new Hono();
CommandeRoutes.post("/commandes", async (c) => {
  await CommandeController.create(c);
});
CommandeRoutes.put("/commandes/:id", async (c) => {
  await CommandeController.update(c);
});
CommandeRoutes.delete("/commandes/:id", async (c) => {
  await CommandeController.delete(c);
});

CommandeRoutes.get("/commandes/:SellerId", async (c) => {
  await CommandeController.getBySellerId(c);
});
CommandeRoutes.get("/commandes/:BuyerId", async (c) => {
  await CommandeController.getByBuyerId(c);
});
