import { db } from "../../db/index.js";
import { articles, cateByArticle, notes } from "../../db/schema.js";
import { eq, sql } from "drizzle-orm";
import type { OArticleRepo } from "../../Domaine/ports/outputs/articleRepo.js";
import type {
  createArticleDto,
  updateAticleDto,
} from "../../Application/dtos/article.js";
import { type Articles } from "../../Domaine/entities/articles.js";

export class ArticleRepoImpl implements OArticleRepo {
  async saveArticle(article: createArticleDto): Promise<Articles | string> {
    try {
      const [created] = await db
        .insert(articles)
        .values({
          userId: article.userId,
          title: article.title,
          images: article.images,
          description: article.description,
          price: article.price,
          stock: article.stock,
        })
        .returning();

      if (article.category.length > 0) {
        await db.insert(cateByArticle).values(
          article.category.map((categoryId) => ({
            articleId: created.id,
            categoryId,
          })),
        );
      }

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
      const { id, category, ...data } = article;

      const [update] = await db
        .update(articles)
        .set(data)
        .where(eq(articles.id, id))
        .returning();

      if (!update) return "Article non trouvé";

      // Remplace les catégories liées plutôt qu'un "updateMany" qui n'avait
      // pas vraiment de sens côté Prisma (pas de clause "where" par ligne).
      if (category) {
        await db.delete(cateByArticle).where(eq(cateByArticle.articleId, id));
        if (category.length > 0) {
          await db.insert(cateByArticle).values(
            category.map((categoryId) => ({
              articleId: id,
              categoryId,
            })),
          );
        }
      }

      const rates = await db
        .select({ number: notes.number })
        .from(notes)
        .where(eq(notes.articleId, update.id));

      const newarticle: Articles = {
        id: update.id,
        userId: update.userId,
        title: update.title,
        images: update.images,
        description: update.description,
        price: update.price,
        rates: rateCalculation(rates.map((r) => r.number)),
        category: category ?? [],
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
      const [deleted] = await db
        .delete(articles)
        .where(eq(articles.id, id))
        .returning();

      if (!deleted) return "Article non trouvé";
      return "Article deleted successfully";
    } catch (error) {
      console.error(error);
      return "Error deleting Article";
    }
  }

  async getArticleById(id: string): Promise<Articles | string> {
    try {
      const article = await db.selectDistinct().from(articles).where(eq(articles.id, id));
      if (!article) return "Article non trouvé";

      const categoriesResult = await db
        .select({ categoryId: cateByArticle.categoryId })
        .from(cateByArticle)
        .where(eq(cateByArticle.articleId, id));

      const notesResult = await db
        .select({ number: notes.number })
        .from(notes)
        .where(eq(notes.articleId, id));

      const newarticle: Articles = {
        id: article[0].id,
        userId: article[0].userId,
        title: article[0].title,
        images: article[0].images,
        description: article[0].description,
        price: article[0].price,
        rates: rateCalculation(notesResult.map((n) => n.number)),
        category: categoriesResult.map((c) => c.categoryId),
        stock: article[0].stock,
        createdAt: article[0].createdAt,
        updatedAt: article[0].updatedAt,
      };

      return newarticle;
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération de l'article";
    }
  }

  async getAllArticles(): Promise<Articles[] | string> {
    try {
      //const result = await db.query.articles.findMany({
      //  with: {
      //    user: { columns: { name: true, address: true } },
      //    categories: { columns: { categoryId: true } },
      //    rates: { columns: { number: true } },
      //  },
      //});
      //
      const result = await db.select().from(articles);
      const notesResult = await db
        .select({ number: notes.number })
        .from(notes);

      const categoriesResult = await db
        .select({ categoryId: cateByArticle.categoryId })
        .from(cateByArticle);

      return result.map((article) => ({
        id: article.id,
        userId: article.userId,
        title: article.title,
        images: article.images,
        description: article.description,
        price: article.price,
        rates: rateCalculation(notesResult.map((r) => r.number)),
        category: categoriesResult.map((c) => c.categoryId),
        stock: article.stock,
        createdAt: article.createdAt,
        updatedAt: article.updatedAt,
      }));
    } catch (error) {
      console.error(error);
      return "Error fetching articles";
    }
  }

  async getAllArticlesByUserId(userId: string): Promise<Articles[] | string> {
    try {
      const result = await db.select().from(articles).where(eq(articles.userId, userId));
      const notesResult = await db.select().from(notes).where(eq(notes.articleId, result[0].id));
      const categoriesResult = await db.select().from(cateByArticle).where(eq(cateByArticle.articleId, result[0].id));

      return result.map((article) => ({
        id: article.id,
        userId: article.userId,
        title: article.title,
        images: article.images,
        description: article.description,
        price: article.price,
        rates: rateCalculation(notesResult.map((r) => r.number)),
        category: categoriesResult.map((c) => c.categoryId),
        stock: article.stock,
        createdAt: article.createdAt,
        updatedAt: article.updatedAt,
      }));
    } catch (error) {
      console.log(error);
      return "Error";
    }
  }

  async searchArticles(query: string): Promise<Articles[] | string> {
    try {
      const pattern = `%${query}%`;

      // Requête équivalente corrigée : la version Prisma d'origine joignait
      // sur "c.categoryId" (colonne inexistante sur Categories) et n'avait
      // pas de GROUP BY malgré le json_agg. Corrigé ci-dessous.
      const result = await db.execute(sql`
        SELECT
          a.id,
          a."userId",
          a.title,
          a.images,
          a.description,
          a.price,
          a.stock,
          a."createdAt",
          a."updatedAt",
          COALESCE(json_agg(DISTINCT c.name) FILTER (WHERE c.name IS NOT NULL), '[]') AS categories,
          COALESCE(json_agg(DISTINCT r.number) FILTER (WHERE r.number IS NOT NULL), '[]') AS rates
        FROM "Articles" a
        LEFT JOIN "CateByArticle" cba ON a.id = cba."articleId"
        LEFT JOIN "Categories" c ON cba."categoryId" = c.name
        LEFT JOIN "Notes" r ON a.id = r."articleId"
        WHERE
          a.title ILIKE ${pattern}
          OR a.description ILIKE ${pattern}
          OR c.name ILIKE ${pattern}
        GROUP BY a.id
        LIMIT 100;
      `);

      const rows = result as unknown as {
        id: string;
        userId: string;
        title: string;
        images: string[];
        description: string;
        price: number;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
        categories: string[];
        rates: number[];
      }[];

      return rows.map((article) => ({
        id: article.id,
        userId: article.userId,
        title: article.title,
        images: article.images,
        description: article.description,
        price: article.price,
        rates: rateCalculation(article.rates),
        category: article.categories,
        stock: article.stock,
        createdAt: article.createdAt,
        updatedAt: article.updatedAt,
      }));
    } catch (error) {
      console.error(error);
      return "error";
    }
  }
}

export const rateCalculation = (rates: number[]): number => {
  if (rates.length === 0) return 0;
  const sum = rates.reduce((acc, rate) => acc + rate, 0);
  return sum / rates.length;
};
