import type { OArticleRepo } from "../../Domaine/ports/outputs/articleRepo.js";
import type {
  createArticleDto,
  updateAticleDto,
  articleDto,
} from "../dtos/article.js";
import { type IArticleService } from "../../Domaine/ports/inputs/articleService.js";
import { type Articles } from "../../Domaine/entities/articles.js";

export class ArticleUseCase implements IArticleService{
  private articleRepo: OArticleRepo;

  constructor(articleRepo: OArticleRepo) {
    this.articleRepo = articleRepo;
  }

  async createArticle(articleData: createArticleDto): Promise<Articles | string> {
    return await this.articleRepo.saveArticle(articleData);
  }

  async updateArticle(articleData: updateAticleDto): Promise<Articles | string> {
    const existingArticle = await this.articleRepo.getArticleById(
      articleData.id.toString(),
    );

    if (!existingArticle) {
      return `Article with ID ${articleData.id} does not exist.`;
    }
    return this.articleRepo.updateArticle(articleData);
  }

  async deleteArticle(articleId: string): Promise<string> {
    const existingArticle = await this.articleRepo.getArticleById(articleId);

    if (!existingArticle) {
      return `Article with ID ${articleId} does not exist.`;
    }

    await this.articleRepo.deleteArticle(articleId);
    return `Article with ID ${articleId} has been deleted successfully.`;
  }

  async getArticleById(articleId: string): Promise<Articles | string> {
    return this.articleRepo.getArticleById(articleId);
  }

  async getAllArticles(): Promise<Articles[] | string> {
    return this.articleRepo.getAllArticles();
  }
}
