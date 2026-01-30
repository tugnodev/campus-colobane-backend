import type { ICartService } from "../ports/inputs/cartService.js";
import type {
  createCartDto,
  updateCartDto,
} from "../../Application/dtos/cart.js";
import type { OCartRepo } from "../ports/outputs/cartRepo.js";
import type { Carts } from "../entities/carts.js";

export class CartService implements ICartService {
  private cartRepo: OCartRepo;

  constructor(cartRepo: OCartRepo) {
    this.cartRepo = cartRepo;
  }

  async getByUserId(userId: string): Promise<Carts | string> {
    return this.cartRepo.getByUserId(userId);
  }

  async createCart(newCart: createCartDto): Promise<Carts | string> {
    return this.cartRepo.createCart(newCart);
  }

  async updateCart(cart: updateCartDto): Promise<Carts | string> {
    return this.cartRepo.updateCart(cart);
  }

  async deleteCart(id: string): Promise<string> {
    return this.cartRepo.deleteCart(id);
  }

  async getAllCarts(): Promise<Carts[] | string> {
    return this.cartRepo.getAllCarts();
  }
}
