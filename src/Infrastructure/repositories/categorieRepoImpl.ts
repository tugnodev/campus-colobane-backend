import { db } from "../../db/index.js";
import { categories, cateByArticle } from "../../db/schema.js";
import { and, eq } from "drizzle-orm";
import type { OCategorieRepo } from "../../Domaine/ports/outputs/categorieRepo.js";
import type { categorieDto,updateCategorieDto } from "../../Application/dtos/categorie.js";
import type { Categorie } from "../../Domaine/entities/categorie.js";
import type { linkToArticleDto } from "../../Application/dtos/cart.js";

export class CategorieRepoImpl implements OCategorieRepo {
  async createCategorie(categorie: categorieDto): Promise<Categorie | string> {
    try {
      const [created] = await db
        .insert(categories)
        .values({
          name: categorie.name,
          description: categorie.description ?? "",
          image: categorie.image ?? "",
        })
        .returning();

      return {
        name: created.name,
        description: created.description ?? "",
        image: created.image ?? "",
      };
    } catch (error) {
      console.error(error);
      return "Error creating categorie";
    }
  }

  async updateCategorie(categorie: updateCategorieDto): Promise<Categorie | string> {
    try {
      const [updated] = await db
        .update(categories)
        .set({
          description: categorie.description,
          image: categorie.image,
        })
        .where(eq(categories.name, categorie.name))
        .returning();

      if (!updated) return "Categorie non trouvée";

      return {
        name: updated.name,
        description: updated.description ?? "",
        image: updated.image ?? "",
      };
    } catch (error) {
      console.error(error);
      return "Error updating categorie";
    }
  }

  async deleteCategorie(name: string): Promise<string> {
    try {
      const [deleted] = await db
        .delete(categories)
        .where(eq(categories.name, name))
        .returning();

      if (!deleted) return "Categorie non trouvée";
      return "Categorie deleted successfully";
    } catch (error) {
      console.error(error);
      return "Error deleting categorie";
    }
  }

  async getAllCategories(): Promise<Categorie[] | string> {
    try {
      const result = await db.select().from(categories);
      return result.map((c) => ({
        name: c.name,
        description: c.description ?? "",
        image: c.image ?? "",
      }));
    } catch (error) {
      console.error(error);
      return "Error fetching categories";
    }
  }

  async linkToArticle(data: linkToArticleDto): Promise<string> {
    try {
      const [link] = await db
        .insert(cateByArticle)
        .values({
          articleId: data.articleId,
          categoryId: data.name,
        })
        .returning();

      if (!link) return "Error linking categorie to article";
      return "done!";
    } catch (error) {
      console.error(error);
      return "Error linking categorie to article";
    }
  }

  async unLinkToArticle(data: linkToArticleDto): Promise<string> {
    try {
      const [unlink] = await db
        .delete(cateByArticle)
        .where(
          and(
            eq(cateByArticle.articleId, data.articleId),
            eq(cateByArticle.categoryId, data.name),
          ),
        )
        .returning();

      if (!unlink) return "Error unlinking categorie from article";
      return "done!";
    } catch (error) {
      console.error(error);
      return "Error unlinking categorie from article";
    }
  }
}
