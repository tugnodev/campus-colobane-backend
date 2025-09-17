import { MessageUseCase } from "../../../Application/usecases/messageUseCase.js";
import type { createMessageDto, updateMessageDto } from "../../../Application/dtos/messages.js";
import type { Context } from "hono";

export class MessageController {
    constructor(private messageUseCase: MessageUseCase) {}

    async create(ctx: Context) {
        const body: createMessageDto = await ctx.req.json();
        const message = await this.messageUseCase.create(body);
        return ctx.json(message);
    }

    async update(ctx: Context) {
        const body: updateMessageDto = await ctx.req.json();
        const message = await this.messageUseCase.update(body);
        return ctx.json(message);
    }

    async delete(ctx: Context) {
        const id = ctx.req.param("id");
        const message = await this.messageUseCase.delete(id);
        return ctx.json(message);
    }

    async getByUserId(ctx: Context) {
        const id = ctx.req.param("id");
        const message = await this.messageUseCase.getByUserId(id);
        return ctx.json(message);
    }
}
