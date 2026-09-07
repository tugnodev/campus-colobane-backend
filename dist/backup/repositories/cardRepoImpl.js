import { OCardRepo } from "../../Domaine/ports/outputs/cardRepo";
import { createCardDto, updateCardDto, cardDto } from "../../Application/dtos/card";
import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();
export class CardRepoImpl {
    async createCard(card) {
        const newCard = await prisma.card.create({ data: { card } });
        if (!newCard)
            return "Error while saving data";
        return newCard;
    }
    async updateCard(card) {
        const update = await prisma.card.update({ where: { id: card.id }, data: { card } });
        if (!update)
            return "Error while updating item";
        return update;
    }
    async deleteCard(id) {
        try {
            await prisma.card.delete({ where: { id } });
            return "Deleted with success";
        }
        catch (error) {
            console.log(error);
            return "Error while deleting item";
        }
    }
    async getCardByUser_id(User_ID) {
        const card = await prisma.card.findUnique({ where: { User_ID } });
        if (!card)
            return "Error while getting card";
        return card;
    }
    async getAllCards() {
        const cards = await prisma.card.findMany();
        if (!cards)
            return "Error while getting cards";
        return cards;
    }
}
