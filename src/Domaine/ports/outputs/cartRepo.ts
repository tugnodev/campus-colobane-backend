import type { createCardDto, updateCardDto, cardDto } from "../../../Application/dtos/cart.js";

export interface OCardRepo {
    createCart(card: createCardDto): Promise<cardDto | string>;
    updateCart(card: updateCardDto): Promise<cardDto | string>;
    deleteCart(id: string): Promise<string>;
    getAllCarts(): Promise<cardDto[] | string>;
    getByUserId(userId: string): Promise<cardDto[] | string>;
}