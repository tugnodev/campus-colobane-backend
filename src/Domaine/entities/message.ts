export type Message = {
  id: string;
  message: string;
  sender_id: string;
  receiver_id: string;
  article_id: string | null;
  createdAt: Date;
  updatedAt: Date;
};
