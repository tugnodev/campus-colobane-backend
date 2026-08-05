import {} from "../../Domaine/entities/message.js";
import {} from "../../Domaine/ports/inputs/messageService.js";
export class MessageUseCase {
    messageRepo;
    notificationService;
    constructor(messageRepo, notificationService) {
        this.messageRepo = messageRepo;
        this.notificationService = notificationService;
    }
    async createMessage(messageData) {
        const newMessage = await this.messageRepo.createMessage(messageData);
        switch (typeof newMessage) {
            case "string":
                return newMessage;
            case "object":
                const dto = {
                    roomId: messageData.roomId,
                    payload: JSON.stringify(newMessage),
                };
                this.notificationService.broadcast(dto);
                return newMessage;
        }
        return newMessage;
    }
    async updateMessage(messageData) {
        const updatedMessage = await this.messageRepo.updateMessage(messageData);
        switch (typeof updatedMessage) {
            case "string":
                return updatedMessage;
            case "object":
                const dto = {
                    roomId: messageData.roomId,
                    payload: JSON.stringify(updatedMessage),
                };
                this.notificationService.broadcast(dto);
                return updatedMessage;
        }
    }
    async deleteMessage(messageId) {
        const deletedMessage = await this.messageRepo.deleteMessage(messageId);
        if (!deletedMessage) {
            return "No message found";
        }
        return deletedMessage;
    }
    async getConversation(data) {
        return this.messageRepo.getConversation(data);
    }
}
