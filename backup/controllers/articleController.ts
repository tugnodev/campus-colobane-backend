import type { Context } from "hono";
import { ArticleUseCase } from "../../../Application/usecases/articleUseCase.js";
import type { createArticleDto, updateAticleDto } from "../../../Application/dtos/article.js";

export class ArticleController {
    constructor(private articleUseCase: ArticleUseCase) {}

    async create(ctx: Context) {
        const articleData: createArticleDto = await ctx.req.json();
        const result = await this.articleUseCase.create(articleData);
        ctx.json(result);
    }

    async update(ctx: Context) {
        const articleData: updateAticleDto = await ctx.req.json();
        const result = await this.articleUseCase.update(articleData);
        ctx.json(result);
    }

    async delete(ctx: Context) {
        const articleId = ctx.req.param("id");
        const result = await this.articleUseCase.delete(articleId);
        ctx.json(result);
    }

    async getById(ctx: Context) {
        const articleId = ctx.req.param("id");
        const result = await this.articleUseCase.getById(articleId);
        ctx.json(result);
    }

    async getAll(ctx: Context) {
        const result = await this.articleUseCase.getAll();
        ctx.json(result);
    }
}