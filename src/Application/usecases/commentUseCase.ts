import type { ICommentService } from '../../Domaine/ports/inputs/commentService.js';
import type { createCommentDto, updateCommentDto, commentDto } from '../dtos/comment.js';

export class CommentUseCase {
    private commentService: ICommentService;

    constructor(commentService: ICommentService) {
        this.commentService = commentService;
    }

    async create(commentData: createCommentDto): Promise<commentDto | string> {
        return this.commentService.createComment(commentData);
    }

    async update(commentData: updateCommentDto): Promise<commentDto | string> {
        return this.commentService.updateComment(commentData);
    }

    async delete(commentId: string): Promise<string> {
        await this.commentService.deleteComment(commentId);
        return `Comment with ID ${commentId} has been deleted successfully.`;
    }

    async getByArticleId(articleId: string): Promise<commentDto[] | string> {
        return this.commentService.getCommentsByArticleId(articleId);
    }

    async getByBuyerId(buyerId: string): Promise<commentDto[] | string> {
        return this.commentService.getCommentsByBuyerId(buyerId);
    }
}
