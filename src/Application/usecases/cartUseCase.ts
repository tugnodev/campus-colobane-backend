import type { OCartRepo } from "../../Domaine/ports/outputs/cartRepo.js";
import type { addToCartDto, createCartDto, deleteCartDto, updateCartDto } from "../dtos/cart.js";
import { type Carts } from "../../Domaine/entities/carts.js";
import { type ICartService } from "../../Domaine/ports/inputs/cartService.js";
import { carts } from "../../db/schema.js";

export class CartUseCase implements ICartService {
  private cartRepo: OCartRepo;

  constructor(cartRepo: OCartRepo) {
    this.cartRepo = cartRepo;
  }

  async createCart(cartData: createCartDto): Promise<Carts | string> {
    return this.cartRepo.createCart(cartData);
  }

  async updateCart(cartData: updateCartDto): Promise<Carts | string> {
    return this.cartRepo.updateCart(cartData);
  }

  async deleteCart(cartData: deleteCartDto): Promise<string> {
    await this.cartRepo.deleteCart(cartData);
    return `Cart with ID ${cartData.cartId} has been deleted successfully.`;
  }

  async getByUserId(userId: string): Promise<Carts | string> {
    return await this.cartRepo.getByUserId(userId);
  }

  async addToCart(data: addToCartDto): Promise<string> {
    return await this.cartRepo.addToCart(data);
  }
}
