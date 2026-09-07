import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();
export class ArticleRepoImpl {
    async saveArticle(article) {
        const newArticle = await prisma.article.create({ data: { article } });
        if (!newArticle)
            return "Error while saving data";
        return newArticle;
    }
    async updateArticle(article) {
        const update = await prisma.article.update({ where: { id: article.id }, data: { article } });
        if (!update)
            return "Error while updating item";
        return update;
    }
    async deleteArticle(id) {
        try {
            await prisma.article.delete({ where: { id } });
            return "Deleted with success";
        }
        catch (error) {
            console.log(error);
            return "Error while deleting item";
        }
    }
    async getArticleById(id) {
        const article = await prisma.article.findUnique({ where: { id } });
        if (!article)
            return "This article doesn't existe anymore";
        return article;
    }
    async getAllArticles() {
        const articles = await prisma.article.findMany();
        if (!articles)
            return "Error while getting articles";
        return articles;
    }
}
