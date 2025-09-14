import type { IArticleService } from '../../Domaine/ports/inputs/articleService.js';
import type { createArticleDto, updateAticleDto, articleDto } from '../dtos/article.js';


export class ArticleUseCase {
    private articleService: IArticleService;

    constructor(articleService: IArticleService) {
        this.articleService = articleService;
    }

    async create(articleData: createArticleDto): Promise<articleDto | string> {
        return this.articleService.createArticle(articleData);
    }

    async update(articleData: updateAticleDto): Promise<articleDto | string> {
        const existingArticle = await this.articleService.getArticleById(articleData.id.toString());

        if (!existingArticle) {
            return `Article with ID ${articleData.id} does not exist.`;
        }
        return this.articleService.updateArticle(articleData);
    }

    async delete(articleId: string): Promise<string> {
        const existingArticle = await this.articleService.getArticleById(articleId);

        if (!existingArticle) {
            return `Article with ID ${articleId} does not exist.`;
        }

        await this.articleService.deleteArticle(articleId);
        return `Article with ID ${articleId} has been deleted successfully.`;
    }

    async getById(articleId: string): Promise<articleDto | string> {
        return this.articleService.getArticleById(articleId);
    }

    async getAll(): Promise<articleDto[] | string> {
        return this.articleService.getAllArticles();
    }
}