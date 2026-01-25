import type { createMessageDto, updateMessageDto, messageDto } from "../../Application/dtos/messages.js";
import type { OMessageRepo } from "../ports/outputs/messageRepo.js";
import type { IMessageService } from "../ports/inputs/messageService.js";
import { type Message } from "../../Domaine/entities/message.js";

export class MessageService implements IMessageService {
    private messageRepo: OMessageRepo;

    constructor(messageRepo: OMessageRepo) {
        this.messageRepo = messageRepo;
    }

    async createMessage(message: createMessageDto): Promise<Message | string> {
        return this.messageRepo.saveMessage(message);
    }

    async updateMessage(message: updateMessageDto): Promise<Message | string> {
        return this.messageRepo.updateMessage(message);
    }

    async deleteMessage(id: string): Promise<string> {
        return this.messageRepo.deleteMessage(id);
    }

    async getMessagesByUserId(userId: string): Promise<Message[] | string> {
        return this.messageRepo.getMessagesByUserId(userId);
    }
}