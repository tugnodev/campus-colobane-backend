import { MessageUseCase } from "../../../Application/usecases/messageUseCase.js";
import type { createMessageDto, updateMessageDto } from "../../../Application/dtos/messages.js";
import type { Context } from "hono";

export class MessageController {
    constructor(private messageUseCase: MessageUseCase) {}

    async create(ctx: Context) {
        const messageData: createMessageDto = await ctx.req.json();
        const result = await this.messageUseCase.create(messageData);
        ctx.json(result);
    }

    async update(ctx: Context) {
        const messageData: updateMessageDto = await ctx.req.json();
        const result = await this.messageUseCase.update(messageData);
        ctx.json(result);
    }

    async delete(ctx: Context) {
        const messageId = ctx.req.param("id");
        const result = await this.messageUseCase.delete(messageId);
        ctx.json(result);
    }

    async getByUserId(ctx: Context) {
        const userId = ctx.req.param("userId");
        const result = await this.messageUseCase.getByUserId(userId);
        ctx.json(result);
    }
}
