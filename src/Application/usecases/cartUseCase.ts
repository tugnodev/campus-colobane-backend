import type { OCartRepo } from "../../Domaine/ports/outputs/cartRepo.js";
import type { createCartDto, updateCartDto, cartDto } from "../dtos/cart.js";
import { type Carts } from "../../Domaine/entities/carts.js"; 
import { type ICartService } from "../../Domaine/ports/inputs/cartService.js"; 

export class CartUseCase implements ICartService {
  private cartRepo: OCartRepo;

  constructor(cartRepo: OCartRepo) {
    this.cartRepo = cartRepo;
  }

  async createCart(cardData: createCartDto): Promise<Carts | string> {
    return this.cartRepo.createCart(cardData);
  }

  async updateCart(cardData: updateCartDto): Promise<Carts | string> {
    return this.cartRepo.updateCart(cardData);
  }

  async deleteCart(cardId: string): Promise<string> {
    await this.cartRepo.deleteCart(cardId);
    return `Cart with ID ${cardId} has been deleted successfully.`;
  }

  async getByUserId(cartId: string): Promise<Carts[] | string> {
    return this.cartRepo.getByUserId(cartId);
  }
  async getAllCarts(): Promise<Carts[] | string> {
    return this.cartRepo.getAllCarts();
  }
}
