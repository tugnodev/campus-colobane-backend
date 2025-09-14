import type { ICartService } from '../../Domaine/ports/inputs/cartService.js';
import type { createCardDto, updateCardDto, cardDto } from '../dtos/cart.js';

export class CartUseCase {
    private cartService: ICartService;

    constructor(cartService: ICartService) {
        this.cartService = cartService;
    }

    async create(cardData: createCardDto): Promise<cardDto | string> {
        return this.cartService.createCart(cardData);
    }

    async update(cardData: updateCardDto): Promise<cardDto | string> {
        // Pas de méthode getCardById, donc on ne vérifie pas l'existence ici
        return this.cartService.updateCart(cardData);
    }

    async delete(cardId: string): Promise<string> {
        await this.cartService.deleteCart(cardId);
        return `Cart with ID ${cardId} has been deleted successfully.`;
    }
    
    async getByUserId(userId: string): Promise<cardDto[] | string> {
        return this.cartService.getByUserId(userId);
    }
}
