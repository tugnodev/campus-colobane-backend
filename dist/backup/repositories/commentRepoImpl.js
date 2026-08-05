import { OCommentRepo } from "../../Domaine/ports/outputs/commentRepo";
import { createCommentDto, updateCommentDto, commentDto } from "../../Application/dtos/comment";
import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();
export class CommentRepoImpl {
    async saveComment(comment) {
        // Create the comment
        const newComment = await prisma.comment.create({ data: comment });
        if (!newComment)
            return "Error creating comment";
        return newComment;
    }
    async updateComment(comment) {
        // Update the comment
        const updatedComment = await prisma.comment.update({
            where: { id: comment.id },
            data: comment,
        });
        if (!updatedComment)
            throw new Error("Error updating comment");
        return updatedComment;
    }
    async deleteComment(id) {
        // Check if the comment exists
        const exist = await prisma.comment.findUnique({ where: { id } });
        if (!exist)
            return `Comment with ID ${id} does not exist`;
        // Delete the comment
        await prisma.comment.delete({ where: { id } });
        return `Comment with ID ${id} deleted successfully`;
    }
    async getCommentsByArticleId(articleId) {
        // Fetch comments by article ID
        const comments = await prisma.comment.findMany({ where: { articleId } });
        if (!comments || comments.length === 0)
            return "No comments found for this article";
        return comments;
    }
    async getCommentsByBuyerId(buyerId) {
        // Fetch comments by buyer ID
        const comments = await prisma.comment.findMany({ where: { buyerId } });
        if (!comments || comments.length === 0)
            return "No comments found for this buyer";
        return comments;
    }
}
