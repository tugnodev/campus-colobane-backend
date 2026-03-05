import { Hono, type Context } from "hono";
import { CartController } from "../../controllers/cartController.js";
import { CartUseCase } from "../../../../Application/usecases/cartUseCase.js";
import { CartRepoImpl } from "../../../repositories/cartRepoImpl.js";

const cartRepository = new CartRepoImpl();
export const cartUseCase = new CartUseCase(cartRepository);
const cartController = new CartController(cartUseCase);

const cartRoutes = new Hono();

cartRoutes.get("/all", async (c: Context) => {
  return cartController.getAllCarts(c);
});

cartRoutes.get("/:id", async (c: Context) => {
  return cartController.getByUserId(c);
});

cartRoutes.post("/add", async (c: Context) => {
  return cartController.createCart(c);
});

cartRoutes.patch("/", async (c: Context) => {
  return cartController.updateCart(c);
});

cartRoutes.delete("/delete", async (c: Context) => {
  return cartController.deleteCart(c);
});

export { cartRoutes };
