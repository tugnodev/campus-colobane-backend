import { UserUseCase } from "../../../Application/usecases/userUseCase.js";
import type { createUserDto, updateUserDto } from "../../../Application/dtos/user.js";
import type { Context } from "hono";

export class UserController {
    constructor(private userUseCase: UserUseCase) {}

    async create(ctx: Context) {
        const userData: createUserDto = await ctx.req.json();
        const result = await this.userUseCase.create(userData);
        ctx.json(result);
    }

    async update(ctx: Context) {
        const userData: updateUserDto = await ctx.req.json();
        const result = await this.userUseCase.update(userData);
        ctx.json(result);
    }

    async delete(ctx: Context) {
        const userId = ctx.req.param("id");
        const result = await this.userUseCase.delete(userId);
        ctx.json(result);
    }

    async getById(ctx: Context) {
        const userId = ctx.req.param("id");
        const result = await this.userUseCase.getById(userId);
        ctx.json(result);
    }

    async getAll(ctx: Context) {
        const result = await this.userUseCase.getAll();
        ctx.json(result);
    }
}
