import { CommentUseCase } from "../../../Application/usecases/commentUseCase.js";
import type {
  commentDto,
  createCommentDto,
  updateCommentDto,
} from "../../../Application/dtos/comment.js";
import type { Context } from "hono";

export class CommentController  {
  private CommentUseCase;
  constructor(CommentUseCase: CommentUseCase) {
    this.CommentUseCase = CommentUseCase;
  }
  async createComments(ctx: Context) {
    const commentData: createCommentDto = await ctx.req.json();
    const comment = await this.CommentUseCase.create(commentData);
    if (!comment) {
      return ctx.json({ error: "Invalid comment data" });
    }
    return ctx.json(comment);
  }
  async updateComments(ctx: Context) {
    const commentData: updateCommentDto = await ctx.req.json();
    const comment = await this.CommentUseCase.update(commentData);
    if (!comment) {
      return ctx.json({ error: "Invalid comment data" });
    }
    if(typeof comment === "string"){
      return ctx.json("Comment not Found");
    }
    return ctx.json(comment);
  }
  
  async deleteComments(ctx: Context) {
    const { id } = await ctx.req.json();
    const comment = await this.CommentUseCase.delete(id);
    if (!comment) {
      return ctx.json({ error: "Invalid comment data" });
    }
    if (typeof comment === "string") {
        return ctx.json({ message: "comment Not Found" });
    }
    return ctx.json(comment);
  }
  async getByArticlesID(ctx : Context){
    const  articleId  =  ctx.req.param("articleId");
    const comment = await this.CommentUseCase.getByArticleId(articleId);
    if (!comment) {
      return ctx.json({ error: "Invalid comment data" });
    }
    if (typeof comment === "string") {
        return ctx.json({ message: "comment Not Found" });
    }
    return ctx.json(comment);
  }
  
  async getByBuyerID(ctx : Context){
    const buyerId  =  ctx.req.param("buyerId");
    const comment = await this.CommentUseCase.getByBuyerId(buyerId);
    if (!comment) {
      return ctx.json({ error: "Invalid comment data" });
    }
    if (typeof comment === "string") {
        return ctx.json({ message: "comment Not Found" });
    }
    return ctx.json(comment);
  }
  
  
  
}
