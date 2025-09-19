import type { OCartRepo } from "../../Domaine/ports/outputs/cartRepo.js";
import type { createCartDto, updateCartDto, cartDto } from "../../Application/dtos/cart.js";
import { prisma } from "../config/auth.js";

export class CartRepoImpl implements OCartRepo {

    async getByUserId(userId: string): Promise<cartDto[] | string> {
        const items = await prisma.cart.findMany({ where: { userId } });
        if (!items || items.length === 0) return "No Items Found";
        return items as cartDto[];
    }

    async createCart(item: createCartDto): Promise<cartDto | string> {
        const newItem = await prisma.cart.create({ data: item });
        if (!newItem) return "Error while creating cart";
        return newItem;
    }

    async updateCart(item: updateCartDto): Promise<cartDto | string> {
        const existingItem = await prisma.cart.findUnique({ where: { id: item.id } });
        if (!existingItem) return "Item Not Found";
        const updatedItem = await prisma.cart.update({ where: { id: item.id }, data: item });
        return updatedItem;
    }

    async deleteCart(id: string): Promise<string> {
        const existingItem = await prisma.cart.findUnique({ where: { id } });
        if (!existingItem) return "Item Not Found";
        await prisma.cart.delete({ where: { id } });
        return "Item Deleted";
    }

    async getByCartId(id: string): Promise<cartDto | string> {
        const item = await prisma.cart.findUnique({ where: { id } });
        if (!item) return "Item Not Found";
        return item;
    }

    async getAllCarts(): Promise<cartDto[] | string> {
        const items = await prisma.cart.findMany();
        if (!items || items.length === 0) return "No Items Found";
        return items as cartDto[];
    }
}
