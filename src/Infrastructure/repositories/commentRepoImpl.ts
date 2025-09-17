import type { OCommentRepo } from "../../Domaine/ports/outputs/commentRepo.js";
import type { createCommentDto, updateCommentDto, commentDto } from "../../Application/dtos/comment.js";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

export class CommentRepoImpl {
    async saveComment(comment: createCommentDto): Promise<commentDto | string> {
        const newComment = await prisma.comment.create({ data: comment });
        return newComment;
    }
    async updateComment(comment: updateCommentDto): Promise<commentDto | string> {
        const updatedComment = await prisma.comment.update({ where: { id: comment.id }, data: comment });
        return updatedComment;
    }
    async deleteComment(id: string): Promise<string> {
        const deletedComment = await prisma.comment.delete({ where: { id } });
        return deletedComment;
    }
    async getCommentsByArticleId(articleId: string): Promise<commentDto[] | string> {
        const comments = await prisma.comment.findMany({ where: { articleId } });
        return comments;
    }
    async getCommentsByBuyerId(buyerId: string): Promise<commentDto[] | string> {
        const comments = await prisma.comment.findMany({ where: { buyerId } });
        return comments;
    }
}

    
