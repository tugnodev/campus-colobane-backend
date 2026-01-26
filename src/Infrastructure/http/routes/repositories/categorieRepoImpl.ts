import type { OCategorieRepo } from "../../Domaine/ports/outputs/categorieRepo.js";
import type { categorieDto } from "../../Application/dtos/categorie.js";
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

const prisma = new PrismaClient()

export class CategorieRepoImpl implements OCategorieRepo {
  async createCategorie(data: categorieDto): Promise<categorieDto | string> {
    try{
      const categorie = await prisma.categorie.create({ data });
      if(!categorie) return "Error creating categorie";
      return categorie;
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        console.error(error);
        return "Error creating categorie";
      }
      return "Error";
    }
  }

  async updateCategorie(data: categorieDto): Promise<categorieDto | string> {
    try{
      const categorie = await prisma.categories.update({ where: { name: data.name }, data });
      if(!categorie) return "Error updating categorie";
      return categorie;
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        console.error(error);
        return "Error updating categorie";
      }
      return "Error";
    }
  }

  async deleteCategorie(name: string): Promise<string> {
    try{
      const categorie = await prisma.categorie.delete({ where: { name } });
      if(!categorie) return "Error deleting categorie";
      return "Categorie deleted successfully";
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        console.error(error);
        return "Error deleting categorie";
      }
      return "Error";
    }
  }

  async getAllCategories(): Promise<categorieDto[] | string> {
    try{
      const categorie = await prisma.categorie.findMany();
      if(!categorie) return "No categories found";
      return categorie;
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        console.error(error);
        return "Error fetching categories";
      }
      return "Error";
    }
  }


}
