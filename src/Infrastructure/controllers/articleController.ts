import { ArticleUseCase } from "../../Application/usecases/articleUseCase.js";
import type {
  createArticleDto,
  updateAticleDto,
} from "../../Application/dtos/article.js";

export class ArticleController {
  constructor(private articleUseCase: ArticleUseCase) {}

  async createArticle(data: createArticleDto) {
    return this.articleUseCase.createArticle(data);
  }

  async updateArticle(data: updateAticleDto) {
    return this.articleUseCase.updateArticle(data);
  }

  async deleteArticle(id: string) {
    return this.articleUseCase.deleteArticle(id);
  }

  async getById(id: string) {
    return this.articleUseCase.getArticleById(id);
  }

  async getByUserId(id: string) {
    return this.articleUseCase.getAllArticlesByUserId(id);
  }

  async searchArticles(query: string) {
    return this.articleUseCase.searchArticles(query);
  }

  async getAll() {
    return this.articleUseCase.getAllArticles();
  }
}