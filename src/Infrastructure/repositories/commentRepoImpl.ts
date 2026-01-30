import { PrismaClient } from "../../../prisma/generated/prisma/index.js";
import type { OCommentRepo } from "../../Domaine/ports/outputs/commentRepo.js";
import type {
  createCommentDto,
  updateCommentDto,
} from "../../Application/dtos/comment.js";
import { type Comment } from "../../Domaine/entities/comment.js";

const prisma = new PrismaClient();

export class CommentRepoImpl implements OCommentRepo {
  async saveComment(comment: createCommentDto): Promise<Comment | string> {
    try {
      const newcomment = await prisma.comments.create({
        data: {
          articleId: comment.articleId,
          userId: comment.userId,
          comment: comment.comment,
        },
      });
      return newcomment;
    } catch (error) {
      console.error(error);
      return "Erreur lors de la création du commentaire";
    }
  }

  async updateComment(comment: updateCommentDto): Promise<Comment | string> {
    try {
      const { id, ...data } = comment;
      return await prisma.comments.update({
        where: { id },
        data,
      });
    } catch (error) {
      console.error(error);
      return "Erreur lors de la mise à jour du commentaire";
    }
  }

  async deleteComment(id: string): Promise<string> {
    try {
      await prisma.comments.delete({ where: { id } });
      return "Commentaire supprimé avec succès";
    } catch (error) {
      console.error(error);
      return "Erreur lors de la suppression du commentaire";
    }
  }

  async getCommentsByArticleId(articleId: string): Promise<Comment[] | string> {
    try {
      const comments = await prisma.comments.findMany({
        where: { articleId },
      });
      return comments;
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération des commentaires";
    }
  }

  async getCommentsByBuyerId(userId: string): Promise<Comment[] | string> {
    try {
      return await prisma.comments.findMany({
        where: { userId },
      });
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération des commentaires du client";
    }
  }
}
