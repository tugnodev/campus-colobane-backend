export interface createMessageDto {
    sender_id: string;
    receiver_id: string;
    article_id?: string;
    message: string;
}

export interface updateMessageDto {
    id: string;
    sender_id?: string;
    receiver_id?: string;
    article_id?: string;
    message?: string;
}

export interface messageDto {
    id: string;
    sender_id: string;
    receiver_id: string;
    article_id: string | null;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}