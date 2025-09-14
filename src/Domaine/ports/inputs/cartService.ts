import type { createCardDto, updateCardDto, cardDto } from "../../../Application/dtos/cart.js";


export interface ICartService {
    createCart(newCart: createCardDto): Promise<cardDto | string>;
    updateCart(card: updateCardDto): Promise<cardDto | string>;
    deleteCart(id: string): Promise<string>;
    getAllCarts(): Promise<cardDto[] | string>;
    getByUserId(userId: string): Promise<cardDto[] | string>;
}