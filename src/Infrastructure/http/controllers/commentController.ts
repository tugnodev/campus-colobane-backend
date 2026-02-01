import { CommentUseCase } from "../../../Application/usecases/commentUseCase.js";
import type {
  createCommentDto,
  updateCommentDto,
} from "../../../Application/dtos/comment.js";
import type { Context } from "hono";

export class CommentController {
  constructor(private readonly commentUseCase: CommentUseCase) {}

  async create(ctx: Context) {
    const data: createCommentDto = await ctx.req.json();
    const result = await this.commentUseCase.createComment(data);
    if (typeof result === "string") {
      return ctx.json({ message: result });
    }
    return ctx.json(result);
  }

  async update(ctx: Context) {
    const data: updateCommentDto = await ctx.req.json();
    const result = await this.commentUseCase.updateComment(data);
    if (typeof result === "string") {
      return ctx.json({ message: result });
    }
    return ctx.json(result);
  }

  async delete(ctx: Context) {
    const id = await ctx.req.json();
    const result = await this.commentUseCase.deleteComment(id);
    if (typeof result === "string") {
      return ctx.json({ message: result });
    }
    return ctx.json(result);
  }

  async getByArticleId(ctx: Context) {
    const id: string = ctx.req.query("id")!;
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
