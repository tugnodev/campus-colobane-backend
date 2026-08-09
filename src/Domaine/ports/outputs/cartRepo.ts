import type {
  createCartDto,
  updateCartDto,
  deleteCartDto,
  addToCartDto
} from "../../../Application/dtos/cart.js";
import type { Carts } from "../../entities/carts.js";

export interface OCartRepo {
  createCart(cart: createCartDto): Promise<Carts | string>;
  updateCart(cart: updateCartDto): Promise<Carts | string>;
  deleteCart(data: deleteCartDto): Promise<string>;
  getByUserId(userId: string): Promise<Carts | string>;
  addToCart(data:addToCartDto): Promise<string>;
}
