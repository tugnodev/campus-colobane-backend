import { Hono } from "hono";
import { CartController } from "../../controllers/cartController.js";
import { CartUseCase } from "../../../../Application/usecases/cartUseCase.js";
import { CartRepoImpl } from "../../../repositories/cartRepoImpl.js";

const cartRepositories = new CartRepoImpl();
const cartUseCase = new CartUseCase(cartRepositories);
const cartController = new CartController(cartUseCase);

export const cartRoutes = new Hono();
cartRoutes.post('/', async (c) =>{
  const res = await cartController.getByUserID(c);
  return c.json({ response: res });  
})
cartRoutes.post('/update', async (c) => {
    return cartController.deleteCart(c);
});
cartRoutes.delete('/delete', async (c) => {
    return cartController.deleteCart(c);
});

