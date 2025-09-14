import type { IArticleService } from "../ports/inputs/articleService.js";
import type { OArticleRepo } from "../ports/outputs/articleRepo.js";
import type { createArticleDto, updateAticleDto, articleDto } from "../../Application/dtos/article.js";


export class ArticleService implements IArticleService {
    private articleRepo: OArticleRepo;

    constructor(articleRepo: OArticleRepo) {
        this.articleRepo = articleRepo;
    }

    async createArticle(article: createArticleDto): Promise<articleDto | string> {
        return this.articleRepo.saveArticle(article);
    }

    async updateArticle(article: updateAticleDto): Promise<articleDto | string> {
        return this.articleRepo.updateArticle(article);
    }

    async deleteArticle(id: string): Promise<string> {
        return this.articleRepo.deleteArticle(id);
    }

    async getArticleById(id: string): Promise<articleDto | string> {
        return this.articleRepo.getArticleById(id);
    }

    async getAllArticles(): Promise<articleDto[] | string> {
        return this.articleRepo.getAllArticles();
    }
}