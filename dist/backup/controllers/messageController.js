import { MessageUseCase } from "../../../Application/usecases/messageUseCase.js";
export class MessageController {
    messageUseCase;
    constructor(messageUseCase) {
        this.messageUseCase = messageUseCase;
    }
    async create(ctx) {
        const messageData = await ctx.req.json();
        const result = await this.messageUseCase.create(messageData);
        ctx.json(result);
    }
    async update(ctx) {
        const messageData = await ctx.req.json();
        const result = await this.messageUseCase.update(messageData);
        ctx.json(result);
    }
    async delete(ctx) {
        const messageId = ctx.req.param("id");
        const result = await this.messageUseCase.delete(messageId);
        ctx.json(result);
    }
    async getByUserId(ctx) {
        const userId = ctx.req.param("userId");
        const result = await this.messageUseCase.getByUserId(userId);
        ctx.json(result);
    }
}
