import type { createMessageDto, updateMessageDto, messageDto } from "../../../Application/dtos/messages.js";

export interface IMessageService {
    createMessage(newMessage: createMessageDto): Promise<messageDto | string>;
    updateMessage(message: updateMessageDto): Promise<messageDto | string>;
    deleteMessage(id: string): Promise<string>;
    getMessagesByUserId(receiverId: string): Promise<messageDto[] | string>;
}