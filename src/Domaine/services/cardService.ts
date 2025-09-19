import type { ICartService } from "../ports/inputs/cartService.js";
import type { createCartDto, updateCartDto, cartDto } from "../../Application/dtos/cart.js";
import type { OCartRepo } from "../ports/outputs/cartRepo.js";

export class CartService implements ICartService {
    private cartRepo: OCartRepo;

    constructor(cartRepo: OCartRepo) {
        this.cartRepo = cartRepo;
    }

    async getByUserId(userId: string): Promise<cartDto[] | string> {
        return this.cartRepo.getByUserId(userId);
    }

    async createCart(newCart: createCartDto): Promise<cartDto | string> {
        return this.cartRepo.createCart(newCart);
    }

    async updateCart(cart: updateCartDto): Promise<cartDto | string> {
        return this.cartRepo.updateCart(cart);
    }

    async deleteCart(id: string): Promise<string> {
        return this.cartRepo.deleteCart(id);
    }

    async getByCartId(cartId: string): Promise<cartDto | string> {
        return this.cartRepo.getByCartId(cartId);
    }

    async getAllCarts(): Promise<cartDto[] | string> {
        return this.cartRepo.getAllCarts();
    }
}
