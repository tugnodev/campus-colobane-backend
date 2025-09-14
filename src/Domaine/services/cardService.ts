import type { ICartService } from "../ports/inputs/cartService.js";
import type { createCardDto, updateCardDto, cardDto } from "../../Application/dtos/cart.js";
import type { OCardRepo } from "../ports/outputs/cartRepo.js";


export class CardService implements ICartService {
    private cartRepo: OCardRepo;

    constructor(cartRepo: OCardRepo) {
        this.cartRepo = cartRepo;
    }

    async createCart(newCard: createCardDto): Promise<cardDto | string> {
        return this.cartRepo.createCart(newCard);
    }

    async updateCart(card: updateCardDto): Promise<cardDto | string> {
        return this.cartRepo.updateCart(card);
    }

    async deleteCart(id: string): Promise<string> {
        return this.cartRepo.deleteCart(id);
    }

    async getByUserId(userId: string): Promise<cardDto[] | string> {
        return this.cartRepo.getByUserId(userId);
    }

    async getAllCarts(): Promise<cardDto[] | string> {
        return this.cartRepo.getAllCarts();
    }
}