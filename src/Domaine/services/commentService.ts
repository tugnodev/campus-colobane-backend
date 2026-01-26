import type {
  ICommentService,
  IRateService,
} from "../ports/inputs/commentService.js";
import type {
  createCommentDto,
  updateCommentDto,
  createRateDto,
  updateRateDto,
} from "../../Application/dtos/comment.js";
import { type Comment, type Rate } from "../../Domaine/entities/comment.js";
import type { OCommentRepo, ORateRepo } from "../ports/outputs/commentRepo.js";

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

export class RateService implements IRateService {
  private rateRepo: ORateRepo;

  constructor(rateRepo: ORateRepo) {
    this.rateRepo = rateRepo;
  }

  async createRate(newRate: createRateDto): Promise<Rate | string> {
    return this.rateRepo.createRate(newRate);
  }

  async updateRate(rate: updateRateDto): Promise<Rate | string> {
    return this.rateRepo.updateRate(rate);
  }

  async deleteRate(id: string): Promise<string> {
    return this.rateRepo.deleteRate(id);
  }

  async getRatesByArticleId(articleId: string): Promise<Rate[] | string> {
    return this.rateRepo.getRatesByArticleId(articleId);
  }

  async getRatesByBuyerId(buyerId: string): Promise<Rate[] | string> {
    return this.rateRepo.getRatesByBuyerId(buyerId);
  }
}
