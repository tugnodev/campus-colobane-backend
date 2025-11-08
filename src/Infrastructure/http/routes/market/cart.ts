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

import { Hono } from 'hono';
import { CartController } from '../../controllers/cartController.js';
import { CartUseCase } from '../../../../Application/usecases/cartUseCase.js';
import { CartRepoImpl } from '../../../repositories/cardRepoImpl.js';

const cartRepository = new CartRepoImpl();
export const cartUseCase = new CartUseCase(cartRepository);
const cartController = new CartController(cartUseCase);

const cartRoutes = new Hono();


cartRoutes.get('/all', async (c: any) => {
    return cartController.getAllCarts(c);
});


cartRoutes.get('/:id', async (c: any) => {
    return cartController.getByCartId(c);
});


cartRoutes.post('/add', async (c: any) => {
    return cartController.createCart(c);
});


cartRoutes.patch('/update', async (c: any) => {
    return cartController.updateCart(c);
});


cartRoutes.delete('/delete', async (c: any) => {
    return cartController.deleteCart(c);
});

export { cartRoutes };
