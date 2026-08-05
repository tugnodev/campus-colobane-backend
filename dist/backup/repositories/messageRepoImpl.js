import { OMessageRepo } from "../../Domaine/ports/outputs/messageRepo";
import { createMessageDto, updateMessageDto, messageDto } from "../../Application/dtos/messages";
import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();
export class MessageRepoImpl {
    async saveMessage(message) {
        const newMes = await prisma.message.create({ data: { message } });
        if (!newMes)
            return "Error while creating message";
        return newMes;
    }
    async updateMessage(message) {
        const update = await prisma.message.update({ where: { id: message.id }, data: message });
        if (!update)
            return "Error while updating message";
        return update;
    }
    async deleteMessage(id) {
        const deleted = await prisma.message.delete({ where: { id } });
        if (!deleted)
            throw new Error("Error while deleting message");
        return "Message deleted successfully";
    }
    async getMessageById(id) {
        const message = await prisma.message.findUnique({ where: { id } });
        if (!message)
            return null;
        return message;
    }
    async getMessagesByUserId(id) {
        const message = await prisma.message.findMany({ where: { userId: id } });
        if (!message || message.length === 0)
            return "No messages found for this user";
        return message;
    }
    async getAllMessages(shopId) {
        const messages = await prisma.message.findMany({ where: { shopId } });
        if (!messages || messages.length === 0)
            return "No messages found";
        return messages;
    }
}
