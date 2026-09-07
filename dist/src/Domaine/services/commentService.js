import {} from "../../Domaine/entities/comment.js";
export class CommentService {
    commentRepo;
    constructor(commentRepo) {
        this.commentRepo = commentRepo;
    }
    async createComment(newComment) {
        return this.commentRepo.saveComment(newComment);
    }
    async updateComment(comment) {
        return this.commentRepo.updateComment(comment);
    }
    async deleteComment(id) {
        return this.commentRepo.deleteComment(id);
    }
    async getCommentsByArticleId(articleId) {
        return this.commentRepo.getCommentsByArticleId(articleId);
    }
    async getCommentsByBuyerId(buyerId) {
        return this.commentRepo.getCommentsByBuyerId(buyerId);
    }
}
