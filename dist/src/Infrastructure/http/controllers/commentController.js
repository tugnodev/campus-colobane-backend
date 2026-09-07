import { CommentUseCase } from "../../../Application/usecases/commentUseCase.js";
export class CommentController {
    commentUseCase;
    constructor(commentUseCase) {
        this.commentUseCase = commentUseCase;
    }
    async create(ctx) {
        const data = await ctx.req.json();
        const result = await this.commentUseCase.createComment(data);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
    async update(ctx) {
        const data = await ctx.req.json();
        const result = await this.commentUseCase.updateComment(data);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
    async delete(ctx) {
        const id = await ctx.req.json();
        const result = await this.commentUseCase.deleteComment(id);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
    async getByArticleId(ctx) {
        const id = ctx.req.query("id");
        if (!id) {
            return ctx.json({ message: "Article ID is required" });
        }
        const result = await this.commentUseCase.getCommentsByArticleId(id);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
}
