import { db } from "../../db/index.js";
import { comments } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import type { OCommentRepo } from "../../Domaine/ports/outputs/commentRepo.js";
import type {
  createCommentDto,
  updateCommentDto,
} from "../../Application/dtos/comment.js";
import { type Comment } from "../../Domaine/entities/comment.js";

export class CommentRepoImpl implements OCommentRepo {
  async saveComment(comment: createCommentDto): Promise<Comment | string> {
    try {
      const [newcomment] = await db
        .insert(comments)
        .values({
          articleId: comment.articleId,
          userId: comment.userId,
          comment: comment.comment,
        })
        .returning();
      return newcomment;
    } catch (error) {
      console.error(error);
      return "Erreur lors de la création du commentaire";
    }
  }

  async updateComment(comment: updateCommentDto): Promise<Comment | string> {
    try {
      const { id, ...data } = comment;
      const [updated] = await db
        .update(comments)
        .set(data)
        .where(eq(comments.id, id))
        .returning();

      if (!updated) return "Commentaire non trouvé";
      return updated;
    } catch (error) {
      console.error(error);
      return "Erreur lors de la mise à jour du commentaire";
    }
  }

  async deleteComment(id: string): Promise<string> {
    try {
      const [deleted] = await db
        .delete(comments)
        .where(eq(comments.id, id))
        .returning();

      if (!deleted) return "Commentaire non trouvé";
      return "Commentaire supprimé avec succès";
    } catch (error) {
      console.error(error);
      return "Erreur lors de la suppression du commentaire";
    }
  }

  async getCommentsByArticleId(articleId: string): Promise<Comment[] | string> {
    try {
      return await db
        .select()
        .from(comments)
        .where(eq(comments.articleId, articleId));
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération des commentaires";
    }
  }

  async getCommentsByBuyerId(userId: string): Promise<Comment[] | string> {
    try {
      return await db
        .select()
        .from(comments)
        .where(eq(comments.userId, userId));
    } catch (error) {
      console.error(error);
      return "Erreur lors de la récupération des commentaires du client";
    }
  }
}
