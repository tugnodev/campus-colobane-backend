import { PrismaClient } from "../../../prisma/generated/index.js";
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
            const newarticle = await prisma.articles.create({
                data: {
                    userId: article.userId,
                    title: article.title,
                    images: article.images,
                    category: article.category,
                    description: article.description,
                    price: article.price,
                    stock: article.stock,
                },
            });
            return newarticle;
        } catch (error) {
            console.error(error);
            return "Error Creation de l'article";
        }
    }

    async updateAticle(article: updateAticleDto): Promise<Articles | string> {
        try {
            const { id, ...data } = article;
            const update = await prisma.articles.update({
                where: { id: id },
                data,
            });
            return update;
        } catch (error) {
            console.error(error);
            return "Error update article";
        }
    }

    async deleteArticle(id: string): Promise<string> {
        try {
            await prisma.articles.delete({
                where: { id }
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
                where: { id }
            });

            if (!article) return "Article non trouvé"; 
            return article;
        } catch (error) {
            console.error(error);
            return "Erreur lors de la récupération de l'article"; 
        }
    }

    async getAllArticles(): Promise<Articles[] | string> {
        try {
            return await prisma.articles.findMany();
        } catch (error) {
            console.error(error);
            return "Error fetching articles";
        }
    }
}