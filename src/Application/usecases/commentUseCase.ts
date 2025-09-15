import type { OCommentRepo } from '../../Domaine/ports/outputs/commentRepo.js';
import type { createCommentDto, updateCommentDto, commentDto } from '../dtos/comment.js';

export class CommentUseCase {
    private commentRepo: OCommentRepo;

    constructor(commentRepo: OCommentRepo) {
        this.commentRepo = commentRepo;
    }

    async create(commentData: createCommentDto): Promise<commentDto | string> {
        return this.commentRepo.saveComment(commentData);
    }

    async update(commentData: updateCommentDto): Promise<commentDto | string> {
        return this.commentRepo.updateComment(commentData);
    }

    async delete(commentId: string): Promise<string> {
        await this.commentRepo.deleteComment(commentId);
        return `Comment with ID ${commentId} has been deleted successfully.`;
    }

    async getByArticleId(articleId: string): Promise<commentDto[] | string> {
        return this.commentRepo.getCommentsByArticleId(articleId);
    }

    async getByBuyerId(buyerId: string): Promise<commentDto[] | string> {
        return this.commentRepo.getCommentsByBuyerId(buyerId);
    }
}
