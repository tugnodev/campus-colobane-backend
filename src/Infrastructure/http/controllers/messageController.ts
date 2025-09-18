import { MessageUseCase } from "../../../Application/usecases/messageUseCase.js";
import type { createMessageDto, updateMessageDto } from "../../../Application/dtos/messages.js";
import type { Context } from "hono";

export class MessageController {
    constructor(private messageUseCase: MessageUseCase) {}

    async create(ctx: Context) {
        const body: createMessageDto = await ctx.req.json();
        const message = await this.messageUseCase.create(body);
        if (typeof message === "string") {
            return ctx.json({ message: "Error while creating message" });
        }
        return ctx.json(message);
    }

    async update(ctx: Context) {
        const body: updateMessageDto = await ctx.req.json();
        const message = await this.messageUseCase.update(body);
        if (typeof message === "string") {
            return ctx.json({ message: "Error while updating message" });
        }
        return ctx.json(message);
    }

    async delete(ctx: Context) {
        const id = ctx.req.param("id");
        const message = await this.messageUseCase.delete(id);
        if (typeof message === "string") {
            return ctx.json({ message: "Error while deleting message" });
        }
        return ctx.json(message);
    }

    async getByUserId(ctx: Context) {
        const id = ctx.req.param("id");
        const receiverFromParam = ctx.req.param("receiver_id");
        const receiverFromQuery = new URL(ctx.req.url).searchParams.get("receiver_id");
        const receiver_id = receiverFromParam ?? receiverFromQuery ?? "";

        if (!id || !receiver_id) {
            return ctx.json({ message: "Missing required parameters: id and receiver_id" }, 400);
        }

        const message = await this.messageUseCase.getByUserId(id, receiver_id);
        if (typeof message === "string") {
            return ctx.json({ message: "Error while getting message" });
        }
        return ctx.json(message);
    }
}
