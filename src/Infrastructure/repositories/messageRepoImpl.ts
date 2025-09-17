import type { OMessageRepo } from "../../Domaine/ports/outputs/messageRepo.js";
import type { createMessageDto, updateMessageDto, messageDto } from "../../Application/dtos/messages.js";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

export class MessageRepoImpl implements OMessageRepo {
    async saveMessage(message: createMessageDto): Promise<messageDto | string> {
        return prisma.message.create({
            data: message
        })
    }
    
    async updateMessage(message: updateMessageDto): Promise<messageDto | string> {
        return prisma.message.update({
            where: {
                id: message.id
            },
            data: message
        })
    }
    
    async deleteMessage(id: string): Promise<string> {
        return prisma.message.delete({
            where: {
                id: id
            }
        })
    }
    
    async getMessageById(id: string): Promise<messageDto | null> {
        return prisma.message.findUnique({
            where: {
                id: id
            }
        })
    }
    
    async getMessagesByUserId(id: string): Promise<messageDto[] | string> {
        return prisma.message.findMany({
            where: {
                user_id: id
            }
        })
    }
    
    async getAllMessages(): Promise<messageDto[] | string> {
        return prisma.message.findMany()
    }
}
