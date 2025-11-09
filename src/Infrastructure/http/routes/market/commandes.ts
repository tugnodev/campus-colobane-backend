import { Hono } from "hono";
import { OrderController } from "../../controllers/orderController.js";
import { OrderRepoImpl } from "../../../repositories/orderRepoImpl.js";
import { OrderUseCase } from "../../../../Application/usecases/orderUseCase.js";

const OrderRepo = new OrderRepoImpl();
const CommandeUseCase = new OrderUseCase(OrderRepo);
const CommandeController = new OrderController(CommandeUseCase);

const Commanrouter = new Hono();
Commanrouter.post("/commandes", async(c) =>{
  await CommandeController.create(c);
});
Commanrouter.put("/commandes/:id", async(c) =>{
  await CommandeController.update(c);
});
Commanrouter.delete("/commandes/:id", async(c) =>{
  await CommandeController.delete(c);
});

Commanrouter.get("/commandes/:SellerId", async(c) =>{
  await CommandeController.getBySellerId(c);
});
Commanrouter.get("/commandes/:BuyerId", async(c) =>{
  await CommandeController.getByBuyerId(c);
});

export default Commanrouter;