import { OMessageRepo } from "../../Domaine/ports/outputs/messageRepo";
import { createMessageDto, updateMessageDto, messageDto } from "../../Application/dtos/messages";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

export class MessageRepoImpl implements OMessageRepo {
    async saveMessage(message: createMessageDto): Promise<messageDto | string> {
        const newMes = await prisma.message.create({ data: { message } });
        if (!newMes) return "Error while creating message";
        return newMes as messageDto;
    }

    async updateMessage(message: updateMessageDto): Promise<messageDto | string> {
        const update = await prisma.message.update({ where: { id: message.id }, data: message });
        if (!update) return "Error while updating message";
        return update as messageDto;
    }

    async deleteMessage(id: string): Promise<string> {
        const deleted = await prisma.message.delete({ where: { id } });
        if (!deleted) throw new Error("Error while deleting message");
        return "Message deleted successfully";
    }

    async getMessageById(id: string): Promise<messageDto | null> {
        const message = await prisma.message.findUnique({ where: { id } });
        if (!message) return null;
        return message as messageDto;
    }

    async getMessagesByUserId(id: string): Promise<messageDto[] | string> {
        const message = await prisma.message.findMany({ where: { userId: id } });
        if (!message || message.length === 0) return "No messages found for this user";
        return message as messageDto[];
    }

    async getAllMessages(shopId : string): Promise<messageDto[] | string> {
        const messages = await prisma.message.findMany({ where: { shopId } });
        if (!messages || messages.length === 0) return "No messages found";
        return messages as messageDto[];
    }
}
