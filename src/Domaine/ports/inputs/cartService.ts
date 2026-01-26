import type {
  createCartDto,../../entities/carts.js
  updateCartDto,
} from "../../../Application/dtos/cart.js";
import { type Carts } from "../../../Domaine/entities/carts.js";

export interface ICartService {
  createCart(newCart: createCartDto): Promise<Carts | string>;
  updateCart(card: updateCartDto): Promise<Carts | string>;
  deleteCart(id: string): Promise<string>;
  getAllCarts(): Promise<Carts[] | string>;
  getByUserId(userId: string): Promise<Carts[] | string>;
}
