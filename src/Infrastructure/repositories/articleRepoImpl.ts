import type { OArticleRepo } from "../../Domaine/ports/outputs/articleRepo.js";
import type {
  createArticleDto,
  updateAticleDto,
  articleDto,
} from "../../Application/dtos/article.js";
import { PrismaClient } from "@prisma/client/extension";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

const prisma = new PrismaClient();

export class ArticleRepoImpl implements OArticleRepo {
  async saveArticle(data: createArticleDto): Promise<articleDto | string> {
    try {
      const created: articleDto = await prisma.article.create({ data });
      if (!created) {
        return "Error creating article";
      }
      return created;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "prisma error";
      }
    }
    return "unknown error";
  }

  async updateArticle(data: updateAticleDto): Promise<articleDto | string> {
    try {
      const updated: articleDto = await prisma.article.update({
        where: { id: data.id },
        data,
      });
      if (!updated) {
        return "Error updating article";
      }
      return updated;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "prisma error";
      }
    }
    return "unknown error";
  }

  async deleteArticle(id: string): Promise<string> {
    try {
      const deleted = await prisma.article.delete({ where: { id } });
      if (!deleted) {
        return "Error deleting article";
      }
      return "Article deleted successfully";
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "prisma error";
      }
    }
    return "unknown error";
  }

  async getArticleById(id: string): Promise<articleDto | string> {
    try {
      const article = await prisma.article.findUnique({ where: { id } });
      if (!article) {
        return "Article not found";
      }
      return article;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "prisma error";
      }
    }
    return "unknown error";
  }

  async getAllArticles(): Promise<articleDto[] | string> {
    try {
      const articles = await prisma.article.findMany();
      if (!articles) {
        return "No articles found";
      }
      return articles;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "prisma error";
      }
    }
    return "unknown error";
  }
}
