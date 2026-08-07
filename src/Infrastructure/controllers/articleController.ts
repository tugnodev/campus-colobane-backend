import { ArticleUseCase } from "../../Application/usecases/articleUseCase.js";
import type {
  createArticleDto,
  updateAticleDto,
} from "../../Application/dtos/article.js";
import type { Context } from "hono";

export class ArticleController {
  constructor(private articleUseCase: ArticleUseCase) {}

  async createArticle(ctx: Context) {
    const data: createArticleDto = await ctx.req.json<createArticleDto>();
    const res = await this.articleUseCase.createArticle(data);
    return ctx.json(res);
  }

  async updateArticle(ctx: Context) {
    const data = await ctx.req.json<updateAticleDto>();
    const result = await this.articleUseCase.updateArticle(data);
    return ctx.json(result);
  }

  async deleteArticle(ctx: Context) {
    const id = await ctx.req.json<string>();
    const res = await this.articleUseCase.deleteArticle(id);
    ctx.json(res);
  }

  async getById(ctx: Context) {
    const params = ctx.req.param();
    console.log(`${JSON.stringify(params)}`);
    const res = await this.articleUseCase.getArticleById(params.id);
    return ctx.json(res);
  }

  async getByUserId(ctx: Context) {
    const id = ctx.req.param<string>() as string;
    const res = await this.articleUseCase.getAllArticlesByUserId(id);
    return ctx.json(res);
  }

  async searArticles(ctx: Context) {
    const query = ctx.req.param("query");
    await this.articleUseCase.searchArticles(query!);
  }

  async getAll(ctx: Context) {
    const res = await this.articleUseCase.getAllArticles();
    const response = ctx.json(res);
    return response;
  }
}
