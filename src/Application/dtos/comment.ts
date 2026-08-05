export interface createCommentDto {
  articleId: string;
  userId: string;
  comment: string;
}

export interface updateCommentDto {
  id: string;
  articleId: string;
  userId: string;
  comment?: string;
}

export interface createRateDto {
  articleId: string;
  buyerId: string;
  rate: number;
}

export interface updateRateDto {
  id: string;
  articleId: string;
  buyerId: string;
  rate?: number;
}
