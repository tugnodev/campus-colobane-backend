import type { createCommentDto, updateCommentDto, commentDto } from '../../../Application/dtos/comment.js';

export interface OCommentRepo {
    saveComment(comment: createCommentDto): Promise<commentDto | string>;
    updateComment(comment: updateCommentDto): Promise<commentDto | string>;
    deleteComment(id: string): Promise<string>;
    getCommentsByArticleId(articleId: string): Promise<commentDto[] | string>;
    getCommentsByBuyerId(buyerId: string): Promise<commentDto[] | string>;
}