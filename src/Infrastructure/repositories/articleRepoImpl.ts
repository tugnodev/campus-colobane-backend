import type { OArticleRepo } from "../../Domaine/ports/outputs/articleRepo.js";
import type { createArticleDto, updateAticleDto, articleDto } from "../../Application/dtos/article.js";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

export class ArticleRepoImpl implements OArticleRepo {
    async saveArticle(article: createArticleDto): Promise<articleDto | string> {
        const newArticle = await prisma.article.create({ data: { article } })
        if(!newArticle) return "Error while saving data"
        return newArticle as articleDto
    }
    async updateArticle(article: updateAticleDto): Promise<articleDto | string> {
        const update = await prisma.article.update({ where: {id: article.id}, data: {article} })
        if(!update) return "Error while updating item"

        return update as articleDto
    }
    async deleteArticle(id: string): Promise<string> {
        try {
            await prisma.article.delete({ where: {id} })
            return "Deleted with success"
        } catch (error) {
            console.log(error)
            return "Error while deleting item"
        }
    }

    async getArticleById(id: string): Promise<articleDto | string> {
        const article = await prisma.article.findUnique({ where: {id} })
        if(!article) return "This article doesn't existe anymore"

        return article as articleDto
    }

    async getAllArticles(): Promise<articleDto[] | string> {
        const articles = await prisma.article.findMany()
        if(!articles) return "Error while getting articles"

        return articles as articleDto[]
    }
}
