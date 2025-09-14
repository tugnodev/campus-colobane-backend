import { CommentUseCase } from "../../../Application/usecases/commentUseCase.js";
import type { createCommentDto, updateCommentDto } from "../../../Application/dtos/comment.js";
import type { Context } from "hono";

export class CommentController {
    constructor(private commentUseCase: CommentUseCase) {}

    async create(ctx: Context) {
        const commentData: createCommentDto = await ctx.req.json();
        const result = await this.commentUseCase.create(commentData);
        ctx.json(result);
    }

    async update(ctx: Context) {
        const commentData: updateCommentDto = await ctx.req.json();
        const result = await this.commentUseCase.update(commentData);
        ctx.json(result);
    }

    async delete(ctx: Context) {
        const commentId = ctx.req.param("id");
        const result = await this.commentUseCase.delete(commentId);
        ctx.json(result);
    }

    async getByArticleId(ctx: Context) {
        const articleId = ctx.req.param("articleId");
        const result = await this.commentUseCase.getByArticleId(articleId);
        ctx.json(result);
    }

    async getByBuyerId(ctx: Context) {
        const buyerId = ctx.req.param("buyerId");
        const result = await this.commentUseCase.getByBuyerId(buyerId);
        ctx.json(result);
    }
}
