import {} from "../../Domaine/entities/carts.js";
import {} from "../../Domaine/ports/inputs/cartService.js";
export class CartUseCase {
    cartRepo;
    constructor(cartRepo) {
        this.cartRepo = cartRepo;
    }
    async createCart(cardData) {
        return this.cartRepo.createCart(cardData);
    }
    async updateCart(cardData) {
        return this.cartRepo.updateCart(cardData);
    }
    async deleteCart(cardId) {
        await this.cartRepo.deleteCart(cardId);
        return `Cart with ID ${cardId} has been deleted successfully.`;
    }
    getByUserId(userId) {
        return this.cartRepo.getByUserId(userId);
    }
    async getAllCarts() {
        return this.cartRepo.getAllCarts();
    }
}
