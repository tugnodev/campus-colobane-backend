import { UserUseCase } from "../../../Application/usecases/userUseCase.js";
export class UserController {
    userUseCase;
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
    }
    async create(ctx) {
        const userData = await ctx.req.json();
        const result = await this.userUseCase.create(userData);
        ctx.json(result);
    }
    async update(ctx) {
        const userData = await ctx.req.json();
        const result = await this.userUseCase.update(userData);
        ctx.json(result);
    }
    async delete(ctx) {
        const userId = ctx.req.param("id");
        const result = await this.userUseCase.delete(userId);
        ctx.json(result);
    }
    async getById(ctx) {
        const userId = ctx.req.param("id");
        const result = await this.userUseCase.getById(userId);
        ctx.json(result);
    }
    async getAll(ctx) {
        const result = await this.userUseCase.getAll();
        ctx.json(result);
    }
}
