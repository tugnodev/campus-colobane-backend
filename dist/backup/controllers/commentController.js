import { CommentUseCase } from "../../../Application/usecases/commentUseCase.js";
export class CommentController {
    commentUseCase;
    constructor(commentUseCase) {
        this.commentUseCase = commentUseCase;
    }
    async create(ctx) {
        const commentData = await ctx.req.json();
        const result = await this.commentUseCase.create(commentData);
        ctx.json(result);
    }
    async update(ctx) {
        const commentData = await ctx.req.json();
        const result = await this.commentUseCase.update(commentData);
        ctx.json(result);
    }
    async delete(ctx) {
        const commentId = ctx.req.param("id");
        const result = await this.commentUseCase.delete(commentId);
        ctx.json(result);
    }
    async getByArticleId(ctx) {
        const articleId = ctx.req.param("articleId");
        const result = await this.commentUseCase.getByArticleId(articleId);
        ctx.json(result);
    }
    async getByBuyerId(ctx) {
        const buyerId = ctx.req.param("buyerId");
        const result = await this.commentUseCase.getByBuyerId(buyerId);
        ctx.json(result);
    }
}
