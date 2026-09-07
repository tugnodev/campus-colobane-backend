import { ArticleUseCase } from "../../../Application/usecases/articleUseCase.js";
export class ArticleController {
    articleUseCase;
    constructor(articleUseCase) {
        this.articleUseCase = articleUseCase;
    }
    async create(ctx) {
        const articleData = await ctx.req.json();
        const result = await this.articleUseCase.create(articleData);
        ctx.json(result);
    }
    async update(ctx) {
        const articleData = await ctx.req.json();
        const result = await this.articleUseCase.update(articleData);
        ctx.json(result);
    }
    async delete(ctx) {
        const articleId = ctx.req.param("id");
        const result = await this.articleUseCase.delete(articleId);
        ctx.json(result);
    }
    async getById(ctx) {
        const articleId = ctx.req.param("id");
        const result = await this.articleUseCase.getById(articleId);
        ctx.json(result);
    }
    async getAll(ctx) {
        const result = await this.articleUseCase.getAll();
        ctx.json(result);
    }
}
