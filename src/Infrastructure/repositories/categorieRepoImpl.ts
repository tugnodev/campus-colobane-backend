import { OCategorieRepo } from "../../Domaine/ports/outputs/categorieRepo";
import { categorieDto } from "../../Application/dtos/categorie";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

export class CategorieRepoImpl implements OCategorieRepo {
    async createCategorie(categorie: categorieDto): Promise<categorieDto | string> {
        const newCate = await prisma.categorie.create({ data: { categorie } });
        if(!newCate) return "error while saving data"
        return newCate as categorieDto
    }

    async updateCategorie(categorie: categorieDto): Promise<categorieDto | string> {
        const update = await prisma.categorie.update({ where: {name: categorie.name}, data: {categorie} })
        if(!update) return "error while updating item"

        return update as categorieDto
    }

    async deleteCategorie(name: string): Promise<string> {
        try {
            await prisma.categorie.delete({ where: {name} })
            return "Deleted with success"
        } catch (error) {
            console.log(error)
            return "Error while deleting item"
        }
    }

    async getAllCategories(): Promise<categorieDto[] | string> {
        const cate = await prisma.categorie.findMany()
        if (!cate) {
            return "Error while getting categories"
        }
        return cate as categorieDto[]
    }
}
