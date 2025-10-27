export interface createCommentDto {
    articleId: string;
    userId: string;
    comment: string;
}

export interface updateCommentDto {
    id: string;
    articleId?: string;
    userId?: string;
    comment?: string;
}

export interface commentDto {
    id: string;
    articleId: string;
    userId: string;
    comment: string;
    date: string;
    createdAt: Date;
    updatedAt: Date;
}