import type { createMessageDto, updateMessageDto, messageDto } from "../../../Application/dtos/messages.js"


export interface OMessageRepo {
    saveMessage(message: createMessageDto): Promise<messageDto | string>;
    updateMessage(message: updateMessageDto): Promise<messageDto | string>;
    deleteMessage(id: string): Promise<string>;
    getMessageById(id: string): Promise<messageDto | null>;
    getMessagesByUserId(id: string): Promise<messageDto[] | string>;
    getAllMessages(): Promise<messageDto[] | string>;
}