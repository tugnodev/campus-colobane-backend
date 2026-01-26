import type { OArticleRepo } from "../../Domaine/ports/outputs/articleRepo.js";
import type {
  createArticleDto,
  updateAticleDto,
  articleDto,
} from "../../Application/dtos/article.js";
import { PrismaClient } from "../../generated/prisma/index.js";
import type { Articles } from "../../Domaine/entities/articles.js";

const prisma = new PrismaClient();
export class ArticleRepoImpl implements OArticleRepo {
  async saveArticle(data: createArticleDto): Promise<Articles | string> {
    try {
      const created = await prisma.articles.create({ data });
      if (!created) return "Error creating article";
      return created;
    } catch (e) {
      return "Error creating article";
    }
  }

  async updateArticle(data: updateAticleDto): Promise<Articles | string> {
    try {
      const updated = await prisma.articles.update({
        where: { id: data.id },
        data,
      });
      if (!updated) return "Error updating article";
      return updated;
    } catch (e) {
      return "Error updating article";
    }
  }

  async deleteArticle(id: string): Promise<string> {
    try {
      const deleted = await prisma.articles.delete({
        where: {
          id,
        },
      });
      if (!deleted) return "Error deleting article";
      return "Article deleted successfully";
    } catch (e) {
      console.error(e);
      return "Error deleting article";
    }
  }

  async getArticleById(id: string): Promise<Articles | string> {
    try {
      const article: Articles = await prisma.articles.findUnique({
        where: { id },
      });
      if (!article) return "Article not found";
      return article;
    } catch (e) {
      return "Error fetching article";
    }
  }

  async getAllArticles(): Promise<Articles[] | string> {
    try {
      const articles = await prisma.articles.findMany();
      if (!articles) return "No articles found";
      return articles;
    } catch (e) {
      return "Error fetching articles";
    }
  }
}
