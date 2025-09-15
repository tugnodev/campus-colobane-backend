import type { OCartRepo } from '../../Domaine/ports/outputs/cartRepo.js';
import type { createCartDto, updateCartDto, cartDto } from '../dtos/cart.js';

export class CartUseCase {
    private cartRepo: OCartRepo;

    constructor(cartRepo: OCartRepo) {
        this.cartRepo = cartRepo;
    }

    async create(cardData: createCartDto): Promise<cartDto | string> {
        return this.cartRepo.createCart(cardData);
    }

    async update(cardData: updateCartDto): Promise<cartDto | string> {
        // Pas de méthode getCardById, donc on ne vérifie pas l'existence ici
        return this.cartRepo.updateCart(cardData);
    }

    async delete(cardId: string): Promise<string> {
        await this.cartRepo.deleteCart(cardId);
        return `Cart with ID ${cardId} has been deleted successfully.`;
    }
    
    async getByUserId(userId: string): Promise<cartDto[] | string> {
        return this.cartRepo.getByUserId(userId);
    }
}
