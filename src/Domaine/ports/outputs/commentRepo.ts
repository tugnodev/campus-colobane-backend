import type {
  createCommentDto,
  updateCommentDto,
} from "../../../Application/dtos/comment.js";
import { type Comment } from "../../entities/comment.js";

export interface OCommentRepo {
  saveComment(comment: createCommentDto): Promise<Comment | string>;
  updateComment(comment: updateCommentDto): Promise<Comment | string>;
  deleteComment(id: string): Promise<string>;
  getCommentsByArticleId(articleId: string): Promise<Comment[] | string>;
  getCommentsByBuyerId(buyerId: string): Promise<Comment[] | string>;
}
