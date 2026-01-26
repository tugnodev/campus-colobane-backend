import type {
  createCommentDto,
  updateCommentDto,
} from "../../../Application/dtos/comment.js";
import type { Comment, Rate } from "../../entities/comment.js";

export interface ICommentService {
  createComment(newComment: createCommentDto): Promise<Comment | string>;
  updateComment(comment: updateCommentDto): Promise<Comment | string>;
  deleteComment(id: string): Promise<string>;
  getCommentsByArticleId(articleId: string): Promise<Comment[] | string>;
  getCommentsByBuyerId(buyerId: string): Promise<Comment[] | string>;
}

export interface IRateService {
  createRate(newRate: createRateDto): Promise<Rate | string>;
  updateRate(rate: updateRateDto): Promise<Rate | string>;
  deleteRate(id: string): Promise<string>;
  getRatesByArticleId(articleId: string): Promise<Rate[] | string>;
  getRatesByBuyerId(buyerId: string): Promise<Rate[] | string>;
}
