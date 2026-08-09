import type {
  createCartDto,
  deleteCartDto,
  updateCartDto,
  addToCartDto
} from "../../../Application/dtos/cart.js";
import { type Carts } from "../../../Domaine/entities/carts.js";

export interface ICartService {
  createCart(newCart: createCartDto): Promise<Carts | string>;
  updateCart(card: updateCartDto): Promise<Carts | string>;
  deleteCart(data: deleteCartDto): Promise<string>;
  getByUserId(userId: string): Promise<Carts | string>;
  addToCart(data: addToCartDto): Promise<string>;
}
