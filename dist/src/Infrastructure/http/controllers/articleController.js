import { ArticleUseCase } from "../../../Application/usecases/articleUseCase.js";
export class ArticleController {
    articleUseCase;
    constructor(articleUseCase) {
        this.articleUseCase = articleUseCase;
    }
    async createArticle(ctx) {
        const data = await ctx.req.json();
        const res = await this.articleUseCase.createArticle(data);
        return ctx.json(res);
    }
    async updateArticle(ctx) {
        const data = await ctx.req.json();
        const result = await this.articleUseCase.updateArticle(data);
        return ctx.json(result);
    }
    async deleteArticle(ctx) {
        const id = await ctx.req.json();
        const res = await this.articleUseCase.deleteArticle(id);
        ctx.json(res);
    }
    async getById(ctx) {
        const id = ctx.req.param();
        const res = await this.articleUseCase.getArticleById(id);
        return ctx.json(res);
    }
    async getByUserId(ctx) {
        const id = ctx.req.param();
        const res = await this.articleUseCase.getAllArticlesByUserId(id);
        return ctx.json(res);
    }
    async searArticles(ctx) {
        const query = ctx.req.param("query");
        await this.articleUseCase.searchArticles(query);
    }
    async getAll(ctx) {
        const res = await this.articleUseCase.getAllArticles();
        const response = ctx.json(res);
        return response;
    }
}
