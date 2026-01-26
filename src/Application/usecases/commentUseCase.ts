import type {
  OCommentRepo,
  ORateRepo,
} from "../../Domaine/ports/outputs/commentRepo.js";
import type {
  createCommentDto,
  updateCommentDto,
  createRateDto,
  updateRateDto,
} from "../dtos/comment.js";
import type { Comment, Rate } from "../../Domaine/entities/comment.js";
import type {
  ICommentService,
  IRateService,
} from "../../Domaine/ports/inputs/commentService.js";

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

export class RateUseCase implements IRateService {
  constructor(private rateRepo: ORateRepo) {}

  async createRate(rateData: createRateDto): Promise<Rate | string> {
    return this.rateRepo.createRate(rateData);
  }

  async updateRate(rateData: updateRateDto): Promise<Rate | string> {
    return this.rateRepo.updateRate(rateData);
  }

  async deleteRate(rateId: string): Promise<string> {
    await this.rateRepo.deleteRate(rateId);
    return `Rate with ID ${rateId} has been deleted successfully.`;
  }

  async getRatesByArticleId(articleId: string): Promise<Rate[] | string> {
    return this.rateRepo.getRatesByArticleId(articleId);
  }

  async getRatesByBuyerId(buyerId: string): Promise<Rate[] | string> {
    return this.rateRepo.getRatesByBuyerId(buyerId);
  }
}
