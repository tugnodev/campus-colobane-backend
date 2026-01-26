import type { ICommentService } from "../ports/inputs/commentService.js";
import type {
  createCommentDto,
  updateCommentDto,
  commentDto,
} from "../../Application/dtos/comment.js";
import { type Comment } from "../../Domaine/entities/comment.js";
import type { OCommentRepo } from "../ports/outputs/commentRepo.js";

export class CommentService implements ICommentService {
  private commentRepo: OCommentRepo;

  constructor(commentRepo: OCommentRepo) {
    this.commentRepo = commentRepo;
  }

  async createComment(newComment: createCommentDto): Promise<Comment | string> {
    return this.commentRepo.saveComment(newComment);
  }

  async updateComment(comment: updateCommentDto): Promise<Comment | string> {
    return this.commentRepo.updateComment(comment);
  }

  async deleteComment(id: string): Promise<string> {
    return this.commentRepo.deleteComment(id);
  }

  async getCommentsByArticleId(articleId: string): Promise<Comment[] | string> {
    return this.commentRepo.getCommentsByArticleId(articleId);
  }

  async getCommentsByBuyerId(buyerId: string): Promise<Comment[] | string> {
    return this.commentRepo.getCommentsByBuyerId(buyerId);
  }
}
