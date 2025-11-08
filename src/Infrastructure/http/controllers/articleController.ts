import { ArticleUseCase } from "../../../Application/usecases/articleUseCase.js";
import type {
  createArticleDto,
  updateAticleDto,
} from "../../../Application/dtos/article.js";
import type { Context } from "hono";

export class ArticleController {
  constructor(private articleUseCase: ArticleUseCase) {}

  async createArticle(ctx: Context) {
    const data: createArticleDto = await ctx.req.json<createArticleDto>();
    const res = await this.articleUseCase.create(data);
    return ctx.json(res);
  }

  async updateArticle(ctx: Context) {
    const data = await ctx.req.json<updateAticleDto>();
    const result = await this.articleUseCase.update(data);
    return ctx.json(result);
  }

  async deleteArticle(ctx: Context) {
    const id = await ctx.req.json<string>();
    const res = await this.articleUseCase.delete(id);
    ctx.json(res);
  }

  async getById(ctx: Context) {
    const id = ctx.req.param<string>() as string;
    const res = await this.articleUseCase.getById(id);
    return ctx.json(res);
  }

  async getAll(ctx: Context) {
    const res = await this.articleUseCase.getAll();
    return ctx.json(res);
  }
}
