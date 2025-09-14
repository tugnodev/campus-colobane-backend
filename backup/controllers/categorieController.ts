import { CategorieUseCase } from "../../../Application/usecases/categorieUseCase.js";
import type { categorieDto } from "../../../Application/dtos/categorie.js";
import type { Context } from "hono";

export class CategorieController {
    constructor(private categorieUseCase: CategorieUseCase) {}

    async create(ctx: Context) {
        const categorieData: categorieDto = await ctx.req.json();
        const result = await this.categorieUseCase.create(categorieData);
        ctx.json(result);
    }

    async update(ctx: Context) {
        const categorieData: categorieDto = await ctx.req.json();
        const result = await this.categorieUseCase.update(categorieData);
        ctx.json(result);
    }

    async delete(ctx: Context) {
        const name = ctx.req.param("name");
        const result = await this.categorieUseCase.delete(name);
        ctx.json(result);
    }

    async getAll(ctx: Context) {
        const result = await this.categorieUseCase.getAll();
        ctx.json(result);
    }
}
