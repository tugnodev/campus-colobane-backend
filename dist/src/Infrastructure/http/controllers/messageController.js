import { MessageUseCase } from "../../../Application/usecases/messageUseCase.js";
export class MessageController {
    messageUseCase;
    constructor(messageUseCase) {
        this.messageUseCase = messageUseCase;
    }
    async create(ctx) {
        const body = await ctx.req.json();
        //verificay
        const message = await this.messageUseCase.createMessage(body);
        if (typeof message === "string") {
            return ctx.json({ message: "Error while creating message" });
        }
        return ctx.json(message);
    }
    async update(ctx) {
        const body = await ctx.req.json();
        const message = await this.messageUseCase.updateMessage(body);
        if (typeof message === "string") {
            return ctx.json({ message: "Error while updating message" });
        }
        return ctx.json(message);
    }
    async delete(ctx) {
        const id = ctx.req.param("id");
        const message = await this.messageUseCase.deleteMessage(id);
        if (typeof message === "string") {
            return ctx.json({ message: "Error while deleting message" });
        }
        return ctx.json(message);
    }
    async getConversation(ctx) {
        const data = await ctx.req.json();
        if (!data) {
            return ctx.json({ message: "Invalid data" });
        }
        const res = await this.messageUseCase.getConversation(data);
        return ctx.json(res);
    }
}
