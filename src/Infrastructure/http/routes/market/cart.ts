import { Hono } from "hono";
import { CartController } from "../../controllers/cartController.js";
import { CartUseCase } from "../../../../Application/usecases/cartUseCase.js";
import { CartRepoImpl } from "../../../repositories/cartRepoImpl.js";

const cartRepository = new CartRepoImpl();
export const cartUseCase = new CartUseCase(cartRepository);
const cartController = new CartController(cartUseCase);

const cartRoutes = new Hono();

cartRoutes.get("/cart/all", async (c: any) => {
  return cartController.getAllCarts(c);
});

cartRoutes.get("/cart/:id", async (c: any) => {
  return cartController.getByCartId(c);
});

cartRoutes.post("/cart/add", async (c: any) => {
  return cartController.createCart(c);
});

cartRoutes.patch("/update", async (c: any) => {
  return cartController.updateCart(c);
});

cartRoutes.delete("/cart/delete", async (c: any) => {
  return cartController.deleteCart(c);
});

export { cartRoutes };
