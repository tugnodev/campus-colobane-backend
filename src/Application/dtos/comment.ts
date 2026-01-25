export interface createCommentDto {
  articleId: string;
  userId: string;
  rates: number;
  comment: string;
}

export interface updateCommentDto {
  id: string;
  articleId: string;
  userId: string;
  comment?: string;
  rates?: string;
}

export interface commentDto {
  id: number;
  articleId: string;
  author: string;
  comment: string;
  rates: string;
  createdAt: Date;
  updatedAt: Date;
}
