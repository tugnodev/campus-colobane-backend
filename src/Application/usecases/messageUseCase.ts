import type { IMessageService } from '../../Domaine/ports/inputs/messageService.js';
import type { createMessageDto, updateMessageDto, messageDto } from '../dtos/messages.js';

export class MessageUseCase {
    private messageService: IMessageService;

    constructor(messageService: IMessageService) {
        this.messageService = messageService;
    }

    async create(messageData: createMessageDto): Promise<messageDto | string> {
        return this.messageService.createMessage(messageData);
    }

    async update(messageData: updateMessageDto): Promise<messageDto | string> {
        return this.messageService.updateMessage(messageData);
    }

    async delete(messageId: string): Promise<string> {
        await this.messageService.deleteMessage(messageId);
        return `Message with ID ${messageId} has been deleted successfully.`;
    }

    async getByUserId(userId: string): Promise<messageDto[] | string> {
        return this.messageService.getMessagesByUserId(userId);
    }
}
