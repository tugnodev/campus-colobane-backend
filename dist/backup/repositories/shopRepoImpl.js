import { OShopRepo } from "../../Domaine/ports/outputs/shopRepo";
import { createShopDto, updateShopDto, shopDto } from "../../Application/dtos/shop";
import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();
export class ShopRepoImpl {
    async saveShop(shop) {
        //verify shop name existency
        const name = shop.name;
        const nameCheck = await prisma.shop.findUnique({ where: { name } });
        if (!nameCheck)
            return `Shop with ${name} already exist`;
        const newShop = await prisma.shop.create({ data: shop });
        if (!newShop)
            return "Error creating shop";
        return newShop;
    }
    async updateShop(shop) {
        //verify existency
        const verif = await prisma.shop.findUnique({ where: { id: shop.id } });
        if (!verif)
            return `Shop with ID ${shop.id} does not exist`;
        const updatedShop = await prisma.shop.update({
            where: { id: shop.id },
            data: shop,
        });
        if (!updatedShop)
            return "Error updating shop";
        return updatedShop;
    }
    async deleteShop(id) {
        const verif = await prisma.shop.findUnique({ where: { id } });
        if (!verif)
            return `Shop with ID ${id} does not exist`;
        await prisma.shop.delete({ where: { id } });
        return `Shop with ID ${id} deleted successfully`;
    }
    async getShopById(id) {
        const shop = await prisma.shop.findUnique({ where: { id } });
        if (!shop)
            return `Shop with ID ${id} does not exist`;
        return shop;
    }
    async getShopByName(name) {
        const shop = await prisma.shop.findUnique({ where: { name } });
        if (!shop)
            return "No Shop with this name";
        return shop;
    }
    async getAllShops() {
        const shops = await prisma.shop.findMany();
        if (!shops)
            return "Error while getting shops";
        return shops;
    }
}
