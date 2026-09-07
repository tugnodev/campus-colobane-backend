export class CartService {
    cartRepo;
    constructor(cartRepo) {
        this.cartRepo = cartRepo;
    }
    async getByUserId(userId) {
        return this.cartRepo.getByUserId(userId);
    }
    async createCart(newCart) {
        return this.cartRepo.createCart(newCart);
    }
    async updateCart(cart) {
        return this.cartRepo.updateCart(cart);
    }
    async deleteCart(id) {
        return this.cartRepo.deleteCart(id);
    }
    async getAllCarts() {
        return this.cartRepo.getAllCarts();
    }
}
