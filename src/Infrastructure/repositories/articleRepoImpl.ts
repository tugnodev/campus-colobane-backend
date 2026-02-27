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

      await prisma.cateByArticle.createMany({
        data: article.category.map((categoryId) => ({
          articleId: created.id,
          categoryId,
        })),
      });

      const newarticle: Articles = {
        id: created.id,
        userId: created.userId,
        title: created.title,
        images: created.images,
        description: created.description,
        price: created.price,
        rates: 0,
        category: article.category,
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

      await prisma.cateByArticle.updateMany({
        data: article.category!.map((categoryId) => ({
          articleId: update.id,
          categoryId,
        })),
      });

      const rates = await prisma.notes.findMany({
        where: { articleId: update.id },
        select: { number: true },
      });

      const newarticle: Articles = {
        id: update.id,
        userId: update.userId,
        title: update.title,
        images: update.images,
        description: update.description,
        price: update.price,
        rates: rateCalculation(rates.map((rate) => rate.number)),
        category: article.category!,
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
        select: { categoryId: true },
      });
      const notes = await prisma.notes.findMany({
        where: { articleId: id },
        select: { number: true },
      });

      const newarticle: Articles = {
        id: article.id,
        userId: article.userId,
        title: article.title,
        images: article.images,
        description: article.description,
        price: article.price,
        rates: rateCalculation(notes.map((note) => note.number)),
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
      let newarticles: Articles[] = [];
      let newarticle: Articles;
      let articles = await prisma.articles.findMany({
        include: {
          user: {
            select: {
              name: true,
              address: true,
            },
          },
          categories: {
            select: {
              categoryId: true,
            },
          },
          rates: {
            select: {
              number: true,
            },
          },
        },
      });

      for (const article of articles) {
        newarticle = {
          id: article.id,
          userId: article.userId,
          title: article.title,
          images: article.images,
          description: article.description,
          price: article.price,
          rates: rateCalculation(article.rates.map((rate) => rate.number)),
          category: article.categories.map((category) => category.categoryId),
          stock: article.stock,
          createdAt: article.createdAt,
          updatedAt: article.updatedAt,
        };
        newarticles.push(newarticle);
      }

      return newarticles;
    } catch (error) {
      console.error(error);
      return "Error fetching articles";
    }
  }

  async getAllArticlesByUserId(userId: string): Promise<Articles[] | string> {
    try {
      let newarticles: Articles[] = [];
      let newarticle: Articles;
      let articles = await prisma.articles.findMany({
        where: {
          userId,
        },
        include: {
          user: {
            select: {
              name: true,
              address: true,
            },
          },
          categories: {
            select: {
              categoryId: true,
            },
          },
          rates: {
            select: {
              number: true,
            },
          },
        },
      });

      for (const article of articles) {
        newarticle = {
          id: article.id,
          userId: article.userId,
          title: article.title,
          images: article.images,
          description: article.description,
          price: article.price,
          rates: rateCalculation(article.rates.map((rate) => rate.number)),
          category: article.categories.map((category) => category.categoryId),
          stock: article.stock,
          createdAt: article.createdAt,
          updatedAt: article.updatedAt,
        };
        newarticles.push(newarticle);
      }

      return newarticles;
    } catch (error) {
      console.log(error);
      return "Error";
    }
  }

  async searchArticles(query: string): Promise<Articles[] | string> {
    try {
      //raw query
      const articles = (await prisma.$queryRaw`
        SELECT
          a.id,
          a.userId,
          a.title,
          a.images,
          a.description,
          a.price,
          a.stock,
          a.createdAt,
          a.updatedAt,
          u.name,
          u.address,
          json_agg(DISTINCT c.categoryId) AS categories,
          json_agg(DISTINCT r.number) AS rates
        FROM
          "Articles" a
        LEFT JOIN "User" u ON a.userId = u.id
        LEFT JOIN "CateByArticle" cba ON a.id = cba.articleId
        LEFT JOIN "Categories" c ON cba.categoryId = c.name
        LEFT JOIN "Notes" r ON a.id = r.articleId
        WHERE
          a.title ILIKE ${query}
          OR a.description ILIKE ${query}
          OR c.name ILIKE ${query}
          LIMIT 100;
      `) as ({
        user: {
          name: string;
          address: string | null;
        };
        rates: {
          number: number;
        }[];
        categories: {
          categoryId: string;
        }[];
      } & {
        id: string;
        title: string;
        images: string[];
        description: string;
        price: number;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
      })[];

      let newarticles: Articles[] = [];

      for (const article of articles) {
        const newarticle = {
          id: article.id,
          userId: article.userId,
          title: article.title,
          images: article.images,
          description: article.description,
          price: article.price,
          rates: rateCalculation(article.rates.map((rate) => rate.number)),
          category: article.categories.map((category) => category.categoryId),
          stock: article.stock,
          createdAt: article.createdAt,
          updatedAt: article.updatedAt,
        };
        newarticles.push(newarticle);
      }
      return newarticles;
    } catch (error) {
      console.error(error);
      return "error";
    }
  }
}

const rateCalculation = (rates: number[]): number => {
  const sum = rates.reduce((acc, rate) => acc + rate, 0);
  return sum / rates.length;
};
