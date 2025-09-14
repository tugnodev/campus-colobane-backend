import type { createCartDto, updateCartDto, cartDto } from "../../../Application/dtos/cart.js";

export interface OCartRepo {
    createCart(cart: createCartDto): Promise<cartDto | string>;
    updateCart(cart: updateCartDto): Promise<cartDto | string>;
    deleteCart(id: string): Promise<string>;
    getAllCarts(): Promise<cartDto[] | string>;
    getByUserId(userId: string): Promise<cartDto[] | string>;
}