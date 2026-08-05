import type {
  createCartDto,
  updateCartDto,
  cartDto,
} from "../../../Application/dtos/cart.js";
import type { Carts } from "../../entities/carts.js";

export interface OCartRepo {
  createCart(cart: createCartDto): Promise<Carts | string>;
  updateCart(cart: updateCartDto): Promise<Carts | string>;
  deleteCart(id: string): Promise<string>;
  getAllCarts(): Promise<Carts[] | string>;
  getByUserId(userId: string): Promise<Carts | string>;
}
