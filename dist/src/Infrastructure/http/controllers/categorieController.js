import { CategorieUseCase } from "../../../Application/usecases/categorieUseCase.js";
export class CategorieController {
    categorieUseCase;
    constructor(categorieUseCase) {
        this.categorieUseCase = categorieUseCase;
    }
    async create(ctx) {
        const orderData = await ctx.req.json();
        const result = await this.categorieUseCase.createCategorie(orderData);
        if (typeof result === "string") {
            return ctx.json("Error");
        }
        return ctx.json(result);
    }
    async update(ctx) {
        const orderData = await ctx.req.json();
        const result = await this.categorieUseCase.updateCategorie(orderData);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
    async delete(ctx) {
        const name = await ctx.req.json();
        const result = await this.categorieUseCase.deleteCategorie(name);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json({ message: result });
    }
    async getAll(ctx) {
        const result = await this.categorieUseCase.getAllCategories();
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json({ message: result });
    }
}
