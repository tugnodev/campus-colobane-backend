export interface createNotesDto {
  number: number;
  userId: string;
  articleId: string;
}

export interface updateNotesDto {
  id: string;
  rate: number;
  userId: string;
  articleId: string;
}

export interface deleteNotesDto {
  id: string;
  rate: number;
  userId: string;
  articleId: string;
}
