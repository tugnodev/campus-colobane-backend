import { CommentUseCase } from "../../../Application/usecases/commentUseCase.js";
import type { createCommentDto, updateCommentDto } from "../../../Application/dtos/comment.js";
import type { Context } from "hono";

export class CommentController  {
    private commentUseCase: CommentUseCase;

    constructor(commentUseCase: CommentUseCase) {
        this.commentUseCase = commentUseCase;
    }
    
    async createComment(ctx: Context) {
        const commentData: createCommentDto = await ctx.req.json();
        const result = await this.commentUseCase.create(commentData);
        ctx.json(result);
    }
    async updateComment(ctx: Context) {
        const commentData: updateCommentDto = await ctx.req.json();
        const result = await this.commentUseCase.update(commentData);
        ctx.json(result);
    }
    async deleteComment(ctx: Context) {
        const commentId: string = await ctx.req.json();
        const result = await this.commentUseCase.delete(commentId);
        ctx.json(result);
    }
    async getCommentById(ctx: Context) {
        const commentId: string = await ctx.req.json();
        const result = await this.commentUseCase.getByArticleId(commentId);
        ctx.json(result);
    }
    async getAllComments(ctx: Context) {
        const commentId: string = await ctx.req.json();
        const result = await this.commentUseCase.getByBuyerId(commentId);
        ctx.json(result);
    }
    
   
}

