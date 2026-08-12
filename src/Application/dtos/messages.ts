export interface createMessageDto {
  roomId: string;
  userId: string;
  sellerId?: string;
  message: string;
  articleId?: string;
}

export interface updateMessageDto {
  id: string;
  roomId: string;
  userId: string;
  message: string;
  articleId: string | null;
}

export interface getConversationDto {
  roomId: string;
  userId: string;
}

export interface broadcastMessageDto {
  roomId: string;
  payload: string;
}
