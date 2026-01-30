export interface createMessageDto {
  roomId: string;
  userId: string;
  message: string;
  articleId: string | null;
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
