import { OCommentRepo } from "../../Domaine/ports/outputs/commentRepo";
import { createCommentDto, updateCommentDto, commentDto } from "../../Application/dtos/comment";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

export class CommentRepoImpl implements OCommentRepo {
    async saveComment(comment: createCommentDto): Promise<commentDto | string> {
        // Create the comment
        const newComment = await prisma.comment.create({ data: comment });
        if (!newComment) return "Error creating comment";
        return newComment as commentDto;   
    }

    async updateComment(comment: updateCommentDto): Promise<commentDto> {
        // Update the comment
        const updatedComment = await prisma.comment.update({
            where: { id: comment.id },
            data: comment,
        });
        if (!updatedComment) throw new Error("Error updating comment");
        return updatedComment as commentDto;
    }

    async deleteComment(id: string): Promise<string> {
        // Check if the comment exists
        const exist = await prisma.comment.findUnique({ where: { id } });
        if (!exist) return `Comment with ID ${id} does not exist`;

        // Delete the comment
        await prisma.comment.delete({ where: { id } });
        return `Comment with ID ${id} deleted successfully`;
    }

    async getCommentsByArticleId(articleId: string): Promise<commentDto[] | string> {
        // Fetch comments by article ID
        const comments = await prisma.comment.findMany({ where: { articleId } });
        if (!comments || comments.length === 0) return "No comments found for this article";
        return comments as commentDto[];
    }

    async getCommentsByBuyerId(buyerId: string): Promise<commentDto[] | string> {
        // Fetch comments by buyer ID
        const comments = await prisma.comment.findMany({ where: { buyerId } });
        if (!comments || comments.length === 0) return "No comments found for this buyer";
        return comments as commentDto[];
    }
}
