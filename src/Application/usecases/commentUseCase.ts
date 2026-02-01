import type { OCommentRepo } from "../../Domaine/ports/outputs/commentRepo.js";
import type {
  createCommentDto,
  updateCommentDto,
  createRateDto,
  updateRateDto,
} from "../dtos/comment.js";
import type { Comment } from "../../Domaine/entities/comment.js";
import type { ICommentService } from "../../Domaine/ports/inputs/commentService.js";

export class CommentUseCase implements ICommentService {
  private commentRepo: OCommentRepo;

  constructor(commentRepo: OCommentRepo) {
    this.commentRepo = commentRepo;
  }

  async createComment(
    commentData: createCommentDto,
  ): Promise<Comment | string> {
    return this.commentRepo.saveComment(commentData);
  }

  async updateComment(
    commentData: updateCommentDto,
  ): Promise<Comment | string> {
    return this.commentRepo.updateComment(commentData);
  }

  async deleteComment(commentId: string): Promise<string> {
    await this.commentRepo.deleteComment(commentId);
    return `Comment with ID ${commentId} has been deleted successfully.`;
  }

  async getCommentsByArticleId(articleId: string): Promise<Comment[] | string> {
    return this.commentRepo.getCommentsByArticleId(articleId);
  }

  async getCommentsByBuyerId(buyerId: string): Promise<Comment[] | string> {
    return this.commentRepo.getCommentsByBuyerId(buyerId);
  }
}
