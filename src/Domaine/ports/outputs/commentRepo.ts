import type {
  createCommentDto,
  createRateDto,
  updateCommentDto,
  updateRateDto,
} from "../../../Application/dtos/comment.js";
import { type Comment, type Rate } from "../../entities/comment.js";

export interface OCommentRepo {
  saveComment(comment: createCommentDto): Promise<Comment | string>;
  updateComment(comment: updateCommentDto): Promise<Comment | string>;
  deleteComment(id: string): Promise<string>;
  getCommentsByArticleId(articleId: string): Promise<Comment[] | string>;
  getCommentsByBuyerId(buyerId: string): Promise<Comment[] | string>;
}

export interface ORateRepo {
  createRate(newRate: createRateDto): Promise<Rate | string>;
  updateRate(rate: updateRateDto): Promise<Rate | string>;
  deleteRate(id: string): Promise<string>;
  getRatesByArticleId(articleId: string): Promise<Rate[] | string>;
  getRatesByBuyerId(buyerId: string): Promise<Rate[] | string>;
}
