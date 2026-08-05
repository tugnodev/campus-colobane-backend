import { CategorieUseCase } from "../../../Application/usecases/categorieUseCase.js";
export class CategorieController {
    categorieUseCase;
    constructor(categorieUseCase) {
        this.categorieUseCase = categorieUseCase;
    }
    async create(ctx) {
        const categorieData = await ctx.req.json();
        const result = await this.categorieUseCase.create(categorieData);
        ctx.json(result);
    }
    async update(ctx) {
        const categorieData = await ctx.req.json();
        const result = await this.categorieUseCase.update(categorieData);
        ctx.json(result);
    }
    async delete(ctx) {
        const name = ctx.req.param("name");
        const result = await this.categorieUseCase.delete(name);
        ctx.json(result);
    }
    async getAll(ctx) {
        const result = await this.categorieUseCase.getAll();
        ctx.json(result);
    }
}
