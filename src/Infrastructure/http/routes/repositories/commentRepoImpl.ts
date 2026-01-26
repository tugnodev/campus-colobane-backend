import type { OCommentRepo } from "../../Domaine/ports/outputs/commentRepo.js";
import type {
  createCommentDto,
  updateCommentDto,
  commentDto,
} from "../../Application/dtos/comment.js";
import { PrismaClient } from "@prisma/client/extension";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

const prisma = new PrismaClient();

export class CommentRepoImpl implements OCommentRepo {
  async saveComment(data: createCommentDto): Promise<commentDto | string> {
    try {
      const createComment = await prisma.comment.create({ data });
      if (createComment.id) {
        return createComment;
      }
      return "error";
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        console.error(error);
        return "Error saving comment";
      }
      return "error";
    }
  }
  async updateComment(comment: updateCommentDto): Promise<commentDto | string> {
    try {
      const updateComment = await prisma.comment.update({
        where: { id: comment.id },
        data: { content: comment.comment },
      });
      if (!updateComment) {
        return "Error updating comment";
      }
      return updateComment;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        console.error(error);
        return "Error updating comment";
      }
      return "error";
    }
  }
  async deleteComment(id: string): Promise<string> {
    try {
      const deleteComment = await prisma.comment.delete({
        where: { id },
      });
      if (!deleteComment) {
        return "Error deleting comment";
      }
      return deleteComment;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        console.error(error);
        return "Error deleting comment";
      }
      return "error";
    }
  }
  async getCommentsByArticleId(articleId: string): Promise<commentDto[] | string> {
    try {
      const comments = await prisma.comment.findMany({
        where: { articleId },
      });
      if (!comments) {
        return "No comments found";
      }
      return comments;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        console.error(error);
        return "Error getting comments";
      }
      return "error";
    }
  }
  async getCommentsByBuyerId(buyerId: string): Promise<commentDto[] | string> {
    try {
      const comments = await prisma.comment.findMany({
        where: { buyerId },
      });
      if (!comments) {
        return "No comments found";
      }
      if (!comments.length) {
        return "No comments found";
      }
      return comments;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        console.error(error);
        return "Error getting comments";
      }
      return "error";
    }
  }
}
