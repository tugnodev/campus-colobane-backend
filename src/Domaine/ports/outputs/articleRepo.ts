import type {
  createArticleDto,
  updateAticleDto,
} from "../../../Application/dtos/article.js";
import type { Articles } from "../../entities/articles.js";

export interface OArticleRepo {
  saveArticle(article: createArticleDto): Promise<Articles | string>;
  updateArticle(article: updateAticleDto): Promise<Articles | string>;
  deleteArticle(id: string): Promise<string>;
  getArticleById(id: string): Promise<Articles | string>;
  getAllArticles(): Promise<Articles[] | string>;
  getAllArticlesByUserId(userId: string): Promise<Articles[] | string>;
  searchArticles(query: string): Promise<Articles[] | string>;
}
