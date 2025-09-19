import type { ICartService } from "../ports/inputs/cartService.js";
import type { createCartDto, updateCartDto, cartDto } from "../../Application/dtos/cart.js";
import type { OCartRepo } from "../ports/outputs/cartRepo.js";


export class CardService implements ICartService {
    private cartRepo: OCartRepo;

    constructor(cartRepo: OCartRepo) {
        this.cartRepo = cartRepo;
    }
    getByUserId(userId: string): Promise<cartDto[] | string> {
        throw new Error("Method not implemented.");
    }

    async createCart(newCard: createCartDto): Promise<cartDto | string> {
        return this.cartRepo.createCart(newCard);
    }

    async updateCart(card: updateCartDto): Promise<cartDto | string> {
        return this.cartRepo.updateCart(card);
    }

    async deleteCart(id: string): Promise<string> {
        return this.cartRepo.deleteCart(id);
    }

    async getByCartId(cartId: string): Promise<cartDto[] | string> {
        return this.cartRepo.getByUserId(cartId);
    }

    async getAllCarts(): Promise<cartDto[] | string> {
        return this.cartRepo.getAllCarts();
    }
}