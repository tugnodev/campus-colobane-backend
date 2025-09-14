import { OShopRepo } from "../../Domaine/ports/outputs/shopRepo";
import { createShopDto, updateShopDto, shopDto } from "../../Application/dtos/shop";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

export class ShopRepoImpl implements OShopRepo {
    async saveShop(shop: createShopDto): Promise<shopDto | string> {
        //verify shop name existency
        const name = shop.name
        const nameCheck = await prisma.shop.findUnique({where: {name}})
        if (!nameCheck) return `Shop with ${name} already exist`

        const newShop = await prisma.shop.create({ data: shop });
        if (!newShop) return "Error creating shop";
        return newShop as shopDto;
    }

    async updateShop(shop: updateShopDto): Promise<shopDto | string> {
        //verify existency
        const verif = await prisma.shop.findUnique({where: { id: shop.id } });
        if (!verif) return `Shop with ID ${shop.id} does not exist`;
        const updatedShop = await prisma.shop.update({
            where: { id: shop.id },
            data: shop,
        });
        if (!updatedShop) return "Error updating shop";
        return updatedShop as shopDto;
    }

    async deleteShop(id: number): Promise<string> {
        const verif = await prisma.shop.findUnique({where: { id } });
        if (!verif) return `Shop with ID ${id} does not exist`;

        await prisma.shop.delete({ where: { id } });
        return `Shop with ID ${id} deleted successfully`;
    }

    async getShopById(id: number): Promise<shopDto | string> {
        const shop = await prisma.shop.findUnique({ where: { id } });
        if (!shop) return `Shop with ID ${id} does not exist`;
        return shop as shopDto;
    }

    async getShopByName(name: string): Promise<shopDto | string> {
        const shop = await prisma.shop.findUnique({ where: { name } })
        if (!shop) return "No Shop with this name";
        return shop as shopDto;
    }
    
    async getAllShops(): Promise<shopDto[] | string> {
        const shops = await prisma.shop.findMany();
        if (!shops) return "Error while getting shops"
        return shops as shopDto[];
    }
}
