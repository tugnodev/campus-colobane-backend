import type { OMessageRepo } from '../../Domaine/ports/outputs/messageRepo.js';
import type { createMessageDto, updateMessageDto, messageDto } from '../dtos/messages.js';

export class MessageUseCase {
    private messageRepo: OMessageRepo;

    constructor(messageRepo: OMessageRepo) {
        this.messageRepo = messageRepo;
    }

    async create(messageData: createMessageDto): Promise<messageDto | string> {
        return this.messageRepo.saveMessage(messageData);
    }

    async update(messageData: updateMessageDto): Promise<messageDto | string> {
        return this.messageRepo.updateMessage(messageData);
    }

    async delete(messageId: string): Promise<string> {
        await this.messageRepo.deleteMessage(messageId);
        return `Message with ID ${messageId} has been deleted successfully.`;
    }

    async getByUserId(userId: string): Promise<messageDto[] | string> {
        return this.messageRepo.getMessagesByUserId(userId);
    }
}
