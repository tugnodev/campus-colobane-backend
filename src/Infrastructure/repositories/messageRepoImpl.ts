import type { OMessageRepo } from "../../Domaine/ports/outputs/messageRepo.js";
import type { createMessageDto, updateMessageDto } from "../../Application/dtos/messages.js";
import { prisma } from "../config/auth.js";
import { type Message } from "../../Domaine/entities/message.js";

export class MessageRepoImpl implements OMessageRepo {
    async saveMessage(message: createMessageDto): Promise<Message | string> {
        return prisma.messages.create({
            data: message
        })
    }
    
    async updateMessage(message: updateMessageDto): Promise<Message | string> {
        return prisma.messages.update({
            where: {
                id: message.id
            },
            data: message
        })
    }
    
    async deleteMessage(id: string): Promise<string> {
        try {
            await prisma.messages.delete({
                where: {
                    id: id
                }
            })
            return "Message deleted successfully";
        } catch (error) {
            return "Error deleting message";
        }
    }
    
    async getMessageById(id: string): Promise<Message | null> {
        return prisma.messages.findUnique({
            where: {
                id: id,
            }
        })
    }
    
    async getMessagesByUserId(id: string, receiver_id: string): Promise<Message[] | string> {
        return await prisma.messages.findMany({
            where: {
                sender_id: id,
                receiver_id: receiver_id,
                AND: {
                    receiver_id: id,
                    sender_id: receiver_id
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        })
    }
    
    async getAllMessages(): Promise<Message[] | string> {
        return await prisma.messages.findMany()
    }
}
