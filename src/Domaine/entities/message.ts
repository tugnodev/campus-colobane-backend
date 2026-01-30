export type Message = {
  id: string;
  roomId: string;
  userId: string;
  message: string;
  articleId: string | null;
  createdAt: Date;
  updatedAt: Date;
};
