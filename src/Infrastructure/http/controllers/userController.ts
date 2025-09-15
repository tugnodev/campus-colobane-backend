import { UserUseCase } from "../../../Application/usecases/userUseCase.js";
import type { createUserDto, updateUserDto } from "../../../Application/dtos/user.js";
import type { Context } from "hono";

export class UserController {
    private userUseCase: UserUseCase;

    constructor(userUseCase: UserUseCase) {
        this.userUseCase = userUseCase;
    }

    async createUser(ctx: Context) {
        const userData: createUserDto = await ctx.req.json();
        const result = await this.userUseCase.createUser(userData);
        ctx.json(result);
    }

    async updateUser(ctx: Context) {
        const userData: updateUserDto = await ctx.req.json();
        const result = await this.userUseCase.updateUser(userData);
        ctx.json(result);
    }

    async deleteUser(ctx: Context) {
        const userId: string = await ctx.req.json();
        const result = await this.userUseCase.deleteUser(userId);
        ctx.json(result);
    }

    async getUserById(ctx: Context) {
        const userId: string = await ctx.req.json();
        const result = await this.userUseCase.getUserById(userId);
        ctx.json(result);
    }

    async getAllUsers(ctx: Context) {
        const result = await this.userUseCase.getAllUsers();
        ctx.json(result);
    }
}
