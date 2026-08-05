import {} from "../entities/articles.js";
export class ArticleService {
    articleRepo;
    constructor(articleRepo) {
        this.articleRepo = articleRepo;
    }
    async createArticle(article) {
        return this.articleRepo.saveArticle(article);
    }
    async updateArticle(article) {
        return this.articleRepo.updateArticle(article);
    }
    async deleteArticle(id) {
        return this.articleRepo.deleteArticle(id);
    }
    async getArticleById(id) {
        return this.articleRepo.getArticleById(id);
    }
    async getAllArticles() {
        return this.articleRepo.getAllArticles();
    }
}
