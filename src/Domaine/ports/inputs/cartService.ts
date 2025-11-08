import type { createCartDto, updateCartDto, cartDto } from "../../../Application/dtos/cart.js";


export interface ICartService {
    createCart(newCart: createCartDto): Promise<cartDto | string>;
    updateCart(card: updateCartDto): Promise<cartDto | string>;
    deleteCart(id: string): Promise<string>;
    getAllCarts(): Promise<cartDto[] | string>;
    getByUserId(userId: string): Promise<cartDto[] | string>;
}
