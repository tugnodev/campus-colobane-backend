export class CommentUseCase {
    commentRepo;
    constructor(commentRepo) {
        this.commentRepo = commentRepo;
    }
    async createComment(commentData) {
        return this.commentRepo.saveComment(commentData);
    }
    async updateComment(commentData) {
        return this.commentRepo.updateComment(commentData);
    }
    async deleteComment(commentId) {
        await this.commentRepo.deleteComment(commentId);
        return `Comment with ID ${commentId} has been deleted successfully.`;
    }
    async getCommentsByArticleId(articleId) {
        return this.commentRepo.getCommentsByArticleId(articleId);
    }
    async getCommentsByBuyerId(buyerId) {
        return this.commentRepo.getCommentsByBuyerId(buyerId);
    }
}
