import { PrismaClient } from "../../generated/prisma/index.js";
import type { OCategorieRepo } from "../../Domaine/ports/outputs/categorieRepo.js";
import type { categorieDto } from "../../Application/dtos/categorie.js";
import type { Categorie } from "../../Domaine/entities/categorie.js";

const prisma = new PrismaClient();

export class CategorieRepoImpl implements OCategorieRepo {
  async createCategorie(
    categorie: categorieDto
  ): Promise<Categorie | string> {
    try {
      const created = await prisma.categories.create({
        data: {
          name: categorie.name,
          description: categorie.description ?? "",
          image: categorie.image ?? "",
        },
      });
      const result: Categorie = {
        name: created.name,
        description: created.description ?? "",
        image: created.image ?? "",
      };


      return result;
    } catch (error) {
      console.error(error);
      return "Error creating categorie";
    }
  }

  async updateCategorie(
    categorie: categorieDto
  ): Promise<Categorie | string> {
    try {
      const updated = await prisma.categories.update({
        where: { name: categorie.name },
        data: {
          description: categorie.description,
          image: categorie.image,
        },
      });
      const result: Categorie = {
        name: updated.name,
        description: updated.description ?? "",
        image: updated.image ?? "",
      };



      return result;
    } catch (error) {
      console.error(error);
      return "Error updating categorie";
    }
  }

  async deleteCategorie(name: string): Promise<string> {
    try {
      await prisma.categories.delete({
        where: { name },
      });
      return "Categorie deleted successfully";
    } catch (error) {
      console.error(error);
      return "Error deleting categorie";
    }
  }

  async getAllCategories(): Promise<Categorie[] | string> {
    try {
      const categories = await prisma.categories.findMany();
  
      return categories.map((c) => ({
        name: c.name,
        description: c.description ?? "",
        image: c.image ?? "",
      }));
    } catch (error) {
      console.error(error);
      return "Error fetching categories";
    }
  }

}
