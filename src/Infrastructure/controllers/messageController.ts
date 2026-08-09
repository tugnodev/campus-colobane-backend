import { MessageUseCase } from "../../Application/usecases/messageUseCase.js";
import type {
  createMessageDto,
  updateMessageDto,
  getConversationDto,
} from "../../Application/dtos/messages.js";
import type { Context } from "hono";

export class MessageController {
  constructor(private messageUseCase: MessageUseCase) {}

  async create(ctx: Context) {
    const body: createMessageDto = await ctx.req.json();
    const message = await this.messageUseCase.createMessage(body);
    if (typeof message === "string") {
      return ctx.json({ message: "Error while creating message" });
    }
    return ctx.json(message);
  }

  async update(ctx: Context) {
    const body: updateMessageDto = await ctx.req.json();
    const message = await this.messageUseCase.updateMessage(body);
    if (typeof message === "string") {
      return ctx.json({ message: "Error while updating message" });
    }
    return ctx.json(message);
  }

  async delete(ctx: Context) {
    const id = ctx.req.param("id");
    const message = await this.messageUseCase.deleteMessage(id!);
    if (typeof message === "string") {
      return ctx.json({ message: "Error while deleting message" });
    }
    return ctx.json(message);
  }

  async getConversation(ctx: Context) {
    const data: getConversationDto = await ctx.req.json();
    if (!data) {
      return ctx.json({ message: "Invalid data" });
    }
    const res = await this.messageUseCase.getConversation(data);
    return ctx.json(res);
  }
}
