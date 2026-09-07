import { PrismaClient } from "../../../prisma/generated/prisma/index.js";
const prisma = new PrismaClient();
export class CategorieRepoImpl {
    async createCategorie(categorie) {
        try {
            const created = await prisma.categories.create({
                data: {
                    name: categorie.name,
                    description: categorie.description ?? "",
                    image: categorie.image ?? "",
                },
            });
            const result = {
                name: created.name,
                description: created.description ?? "",
                image: created.image ?? "",
            };
            return result;
        }
        catch (error) {
            console.error(error);
            return "Error creating categorie";
        }
    }
    async updateCategorie(categorie) {
        try {
            const updated = await prisma.categories.update({
                where: { name: categorie.name },
                data: {
                    description: categorie.description,
                    image: categorie.image,
                },
            });
            const result = {
                name: updated.name,
                description: updated.description ?? "",
                image: updated.image ?? "",
            };
            return result;
        }
        catch (error) {
            console.error(error);
            return "Error updating categorie";
        }
    }
    async deleteCategorie(name) {
        try {
            await prisma.categories.delete({
                where: { name },
            });
            return "Categorie deleted successfully";
        }
        catch (error) {
            console.error(error);
            return "Error deleting categorie";
        }
    }
    async getAllCategories() {
        try {
            const categories = await prisma.categories.findMany();
            return categories.map((c) => ({
                name: c.name,
                description: c.description ?? "",
                image: c.image ?? "",
            }));
        }
        catch (error) {
            console.error(error);
            return "Error fetching categories";
        }
    }
    async linkToArticle(data) {
        try {
            const link = await prisma.cateByArticle.create({
                data: {
                    articleId: data.articleId,
                    categoryId: data.name,
                },
            });
            if (!link) {
                return "Error linking categorie to article";
            }
            return "done!";
        }
        catch (error) {
            console.error(error);
            return "Error linking categorie to article";
        }
    }
    async unLinkToArticle(data) {
        try {
            const unlink = await prisma.cateByArticle.delete({
                where: {
                    articleId_categoryId: {
                        articleId: data.articleId,
                        categoryId: data.name,
                    },
                },
            });
            if (!unlink) {
                return "Error unlinking categorie from article";
            }
            return "done!";
        }
        catch (error) {
            console.error(error);
            return "Error unlinking categorie from article";
        }
    }
}
