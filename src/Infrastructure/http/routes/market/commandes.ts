import { Hono } from "hono";
import { OrderController } from "../../controllers/orderController.js";
import { OrderRepoImpl } from "../../../repositories/orderRepoImpl.js";
import { OrderUseCase } from "../../../../Application/usecases/orderUseCase.js";

const OrderRepo = new OrderRepoImpl();
const commandeUseCase = new OrderUseCase(OrderRepo);
const commandeController = new OrderController(commandeUseCase);

export const commandeRoutes = new Hono();
commandeRoutes.post("/", async (c) => {
  const result = await commandeController.create(c);
  if (!result) {
    return c.json("erreur");
  }
  return c.json({ message: "commande créée", cmd: result });
});
commandeRoutes.put("/:id", async (c) => {
  const result = await commandeController.update(c);
  if (!result) {
    return c.json("erreur");
  }
  return c.json({ message: "commande mise à jour", cmd: result });
});
commandeRoutes.delete("/:id", async (c) => {
  const result = await commandeController.delete(c);
  if (!result) {
    return c.json("erreur");
  }
  return c.json({ message: "commande supprimée", cmd: result });
});

commandeRoutes.get("/:SellerId", async (c) => {
  const commands = await commandeController.getBySellerId(c);
  if (!commands) {
    return c.json("erreur");
  }
  return c.json({ message: "commandes", cmd: commands });
});
commandeRoutes.get("/buyer:BuyerId", async (c) => {
  const commands = await commandeController.getByBuyerId(c);
  if (!commands) {
    return c.json("erreur");
  }
  return c.json({ message: "commandes", cmd: commands });
});
