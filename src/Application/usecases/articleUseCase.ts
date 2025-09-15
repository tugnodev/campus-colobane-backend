import type { OArticleRepo } from '../../Domaine/ports/outputs/articleRepo.js';
import type { createArticleDto, updateAticleDto, articleDto } from '../dtos/article.js';


export class ArticleUseCase {
    private articleRepo: OArticleRepo;

    constructor(articleRepo: OArticleRepo) {
        this.articleRepo = articleRepo;
    }

    async create(articleData: createArticleDto): Promise<articleDto | string> {
        return this.articleRepo.saveArticle(articleData);
    }

    async update(articleData: updateAticleDto): Promise<articleDto | string> {
        const existingArticle = await this.articleRepo.getArticleById(articleData.id.toString());

        if (!existingArticle) {
            return `Article with ID ${articleData.id} does not exist.`;
        }
        return this.articleRepo.updateArticle(articleData);
    }

    async delete(articleId: string): Promise<string> {
        const existingArticle = await this.articleRepo.getArticleById(articleId);

        if (!existingArticle) {
            return `Article with ID ${articleId} does not exist.`;
        }

        await this.articleRepo.deleteArticle(articleId);
        return `Article with ID ${articleId} has been deleted successfully.`;
    }

    async getById(articleId: string): Promise<articleDto | string> {
        return this.articleRepo.getArticleById(articleId);
    }

    async getAll(): Promise<articleDto[] | string> {
        return this.articleRepo.getAllArticles();
    }
}