import type { OMessageRepo } from '../../Domaine/ports/outputs/messageRepo.js';
import type { createMessageDto, updateMessageDto, messageDto } from '../dtos/messages.js';
import { WebSocketHandler } from '../../Infrastructure/websocket/websocketService.js';

export class MessageUseCase {
    private messageRepo: OMessageRepo;
    private notificationService: WebSocketHandler;

    constructor(messageRepo: OMessageRepo, notificationService: WebSocketHandler) {
        this.messageRepo = messageRepo;
        this.notificationService = notificationService;
    }

    async create(messageData: createMessageDto): Promise<messageDto | string> {
        const newMessage = await this.messageRepo.saveMessage(messageData);
        const receiverSocket = this.notificationService.getAllClients().get(messageData.receiver_id);
        if (receiverSocket) {
            receiverSocket.send(JSON.stringify(newMessage));
        }
        return newMessage;
    }

    async update(messageData: updateMessageDto): Promise<messageDto | string> {
        const updatedMessage = await this.messageRepo.updateMessage(messageData);
        const receiverSocket = this.notificationService.getAllClients().get(messageData.receiver_id!);
        if (receiverSocket) {
            receiverSocket.send(JSON.stringify(updatedMessage));
        }
        return updatedMessage;
    }

    async delete(messageId: string): Promise<string> {
        await this.messageRepo.deleteMessage(messageId);
        return `Message with ID ${messageId} has been deleted successfully.`;
    }

    async getByUserId(userId: string): Promise<messageDto[] | string> {
        return this.messageRepo.getMessagesByUserId(userId);
    }
}
