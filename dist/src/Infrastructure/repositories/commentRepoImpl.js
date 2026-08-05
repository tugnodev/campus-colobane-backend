import { PrismaClient } from "../../../prisma/generated/prisma/index.js";
import {} from "../../Domaine/entities/comment.js";
const prisma = new PrismaClient();
export class CommentRepoImpl {
    async saveComment(comment) {
        try {
            const newcomment = await prisma.comments.create({
                data: {
                    articleId: comment.articleId,
                    userId: comment.userId,
                    comment: comment.comment,
                },
            });
            return newcomment;
        }
        catch (error) {
            console.error(error);
            return "Erreur lors de la création du commentaire";
        }
    }
    async updateComment(comment) {
        try {
            const { id, ...data } = comment;
            return await prisma.comments.update({
                where: { id },
                data,
            });
        }
        catch (error) {
            console.error(error);
            return "Erreur lors de la mise à jour du commentaire";
        }
    }
    async deleteComment(id) {
        try {
            await prisma.comments.delete({ where: { id } });
            return "Commentaire supprimé avec succès";
        }
        catch (error) {
            console.error(error);
            return "Erreur lors de la suppression du commentaire";
        }
    }
    async getCommentsByArticleId(articleId) {
        try {
            const comments = await prisma.comments.findMany({
                where: { articleId },
            });
            return comments;
        }
        catch (error) {
            console.error(error);
            return "Erreur lors de la récupération des commentaires";
        }
    }
    async getCommentsByBuyerId(userId) {
        try {
            return await prisma.comments.findMany({
                where: { userId },
            });
        }
        catch (error) {
            console.error(error);
            return "Erreur lors de la récupération des commentaires du client";
        }
    }
}
