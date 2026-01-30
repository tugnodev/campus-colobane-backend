import { PrismaClient } from "../../../prisma/generated/prisma/index.js";
import type { OArticleRepo } from "../../Domaine/ports/outputs/articleRepo.js";
import type {
  createArticleDto,
  updateAticleDto,
} from "../../Application/dtos/article.js";
import { type Articles } from "../../Domaine/entities/articles.js";

const prisma = new PrismaClient();

export class ArticleRepoImpl implements OArticleRepo {
  async saveArticle(article: createArticleDto): Promise<Articles | string> {
    try {
      const created = await prisma.articles.create({
        data: {
          userId: article.userId,
          title: article.title,
          images: article.images,
          description: article.description,
          price: article.price,
          stock: article.stock,
        },
      });

      const categories = await prisma.cateByArticle.findMany({
        where: { articleId: created.id },
      });

      const newarticle: Articles = {
        id: created.id,
        userId: created.userId,
        title: created.title,
        images: created.images,
        description: created.description,
        price: created.price,
        rates: rateCalculation(created.rates),
        category: categories.map((category) => category.categoryId),
        stock: created.stock,
        createdAt: created.createdAt,
        updatedAt: created.updatedAt,
      };

      return newarticle;
    } catch (error) {
      console.error(error);
      return "Error Creation de l'article";
    }
  }

  async updateArticle(article: updateAticleDto): Promise<Articles | string> {
    try {
      const { id, ...data } = article;
      const update = await prisma.articles.update({
        where: { id: id },
        data,
      });

      const categories = await prisma.cateByArticle.findMany({
        where: { articleId: id },
      });

      const newarticle: Articles = {
        id: update.id,
        userId: update.userId,
        title: update.title,
        images: update.images,
        description: update.description,
        price: update.price,
        rates: rateCalculation(update.rates),
        category: categories.map((category) => category.categoryId),
        stock: update.stock,
        createdAt: update.createdAt,
        updatedAt: update.updatedAt,
      };

      return newarticle;
    } catch (error) {
      console.error(error);
      return "Error update article";
    }
  }

  async deleteArticle(id: string): Promise<string> {
    try {
      await prisma.articles.delete({
        where: { id },
      });
      return "Article deleted successfully";
    } catch (error) {
      console.error(error);
      return "Error deleting Article";
    }
  }

  async getArticleById(id: string): Promise<Articles | string> {
    try {
      const article = await prisma.articles.findUnique({
        where: { id },
      });

      if (!article) return "Article non trouvé";

      const categories = await prisma.cateByArticle.findMany({
        where: { articleId: id },
      });

      const newarticle: Articles = {
        id: article.id,
        userId: article.userId,
        title: article.title,
        images: article.images,
        description: article.description,
        price: article.price,
        rates: rateCalculation(article.rates),
        category: categories.map((category) => category.categoryId),
        stock: article.stock,
        createdAt: article.createdAt,
        updatedAt: article.updatedAt,
      };

      return newarticle;
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération de l'article";
    }
  }

  async getAllArticles(): Promise<Articles[] | string> {
    try {
      const articles = await prisma.articles.findMany();
      const newarticles = await Promise.all(
        articles.map(async (article) => {
          const categories = await prisma.cateByArticle.findMany({
            where: { articleId: article.id },
          });

          const newarticle: Articles = {
            id: article.id,
            userId: article.userId,
            title: article.title,
            images: article.images,
            description: article.description,
            price: article.price,
            rates: rateCalculation(article.rates),
            category: categories.map((category) => category.categoryId),
            stock: article.stock,
            createdAt: article.createdAt,
            updatedAt: article.updatedAt,
          };

          return newarticle;
        }),
      );

      return newarticles;
    } catch (error) {
      console.error(error);
      return "Error fetching articles";
    }
  }
}

const rateCalculation = (rates: number[]): number => {
  const sum = rates.reduce((acc, rate) => acc + rate, 0);
  return sum / rates.length;
};
