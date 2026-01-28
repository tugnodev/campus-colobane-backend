import { PrismaClient } from "../../../prisma/generated/index.js";
import type {
  OCommentRepo,
  ORateRepo,
} from "../../Domaine/ports/outputs/commentRepo.js";
import type {
  createCommentDto,
  updateCommentDto,
  createRateDto,
  updateRateDto,
} from "../../Application/dtos/comment.js";
import { type Comment, type Rate } from "../../Domaine/entities/comment.js";

const prisma = new PrismaClient();

export class CommentRepoImpl implements OCommentRepo, ORateRepo {
  async saveComment(comment: createCommentDto): Promise<Comment | string> {
    try {
      const newcomment = await prisma.comments.create({
        data: {
          article_id: comment.articleId,
          buyer_id: comment.userId,
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
        where: { article_id: articleId },
      });
      return comments;
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération des commentaires";
    }
  }

  async getCommentsByBuyerId(buyerId: string): Promise<Comment[] | string> {
    try {
      return await prisma.comments.findMany({
        where: { userId: buyerId },
      });
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération des commentaires du client";
    }
  }

  async createRate(newRate: createRateDto): Promise<Rate | string> {
    try {
      return await prisma.articleRates.create({
        data: {
          article_id: newRate.articleId,
          seller_id: newRate.buyerId,
          rate: newRate.rate,
        },
      });
    } catch (error) {
      console.error(error);
      return "Erreur lors de la création de la note";
    }
  }

  async updateRate(rate: updateRateDto): Promise<Rate | string> {
    try {
      const { id, ...data } = rate;
      return await prisma.articleRates.update({
        where: { id },
        data,
      });
    } catch (error) {
      console.error(error);
      return "Erreur lors de la mise à jour de la note";
    }
  }

  async deleteRate(id: string): Promise<string> {
    try {
      await prisma.rates.delete({ where: { id } });
      return "Note supprimée avec succès";
    } catch (error) {
      console.error(error);
      return "Erreur lors de la suppression de la note";
    }
  }

  async getRatesByArticleId(articleId: string): Promise<Rate[] | string> {
    try {
      return await prisma.rates.findMany({
        where: { articleId },
      });
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération des notes";
    }
  }

  async getRatesByBuyerId(buyerId: string): Promise<Rate[] | string> {
    try {
      return await prisma.rates.findMany({
        where: { buyerId },
      });
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération des notes du client";
    }
  }
}
