export class MessageService {
    messageRepo;
    messageBroadcast;
    constructor(messageRepo, messageBroadcast) {
        this.messageRepo = messageRepo;
        this.messageBroadcast = messageBroadcast;
    }
    async createMessage(message) {
        const createdMessage = await this.messageRepo.createMessage(message);
        const dto = {
            roomId: message.roomId,
            payload: JSON.stringify(createdMessage),
        };
        this.messageBroadcast.broadcast(dto);
        return createdMessage;
    }
    async updateMessage(message) {
        return this.messageRepo.updateMessage(message);
    }
    async deleteMessage(id) {
        return this.messageRepo.deleteMessage(id);
    }
    async getConversation(data) {
        return this.messageRepo.getConversation(data);
    }
}
