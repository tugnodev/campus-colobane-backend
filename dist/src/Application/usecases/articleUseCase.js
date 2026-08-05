import {} from "../../Domaine/ports/inputs/articleService.js";
import {} from "../../Domaine/entities/articles.js";
export class ArticleUseCase {
    articleRepo;
    constructor(articleRepo) {
        this.articleRepo = articleRepo;
    }
    async createArticle(articleData) {
        return await this.articleRepo.saveArticle(articleData);
    }
    async updateArticle(articleData) {
        const existingArticle = await this.articleRepo.getArticleById(articleData.id.toString());
        if (!existingArticle) {
            return `Article with ID ${articleData.id} does not exist.`;
        }
        return this.articleRepo.updateArticle(articleData);
    }
    async deleteArticle(articleId) {
        const existingArticle = await this.articleRepo.getArticleById(articleId);
        if (!existingArticle) {
            return `Article with ID ${articleId} does not exist.`;
        }
        await this.articleRepo.deleteArticle(articleId);
        return `Article with ID ${articleId} has been deleted successfully.`;
    }
    async getArticleById(articleId) {
        return this.articleRepo.getArticleById(articleId);
    }
    async getAllArticles() {
        return this.articleRepo.getAllArticles();
    }
    async getAllArticlesByUserId(userId) {
        return this.articleRepo.getAllArticlesByUserId(userId);
    }
    async searchArticles(query) {
        return this.articleRepo.searchArticles(query);
    }
}
