import { CategorieUseCase } from "../../../Application/usecases/categorieUseCase.js";
import type { categorieDto } from "../../../Application/dtos/categorie.js";
import type { Context } from "hono";

export class CategorieController  {
     private categorieUseCase: CategorieUseCase;
     constructor(categorieUseCase: CategorieUseCase) {
        this.categorieUseCase = categorieUseCase;
     }

    async create(ctx: Context) {
            const orderData: categorieDto = await ctx.req.json();
            const result = await this.categorieUseCase.create(orderData);
            if (typeof result === "string") {
                return ctx.json( "Error" );
            }
            return ctx.json(result);
        }
    
        async update(ctx: Context) {
            const orderData: categorieDto = await ctx.req.json();
            const result = await this.categorieUseCase.update(orderData);
            if (typeof result === "string") {
                return ctx.json({ message: result });
            }
            return ctx.json(result);
        }
    
        async delete(ctx: Context) {
            const  name  = await ctx.req.json();
            const result = await this.categorieUseCase.delete(name);
            if (typeof result === "string") {
                return ctx.json({ message: result });
            }
            return ctx.json({ message: result });
        }
    
       async getAll(ctx: Context) {
            const result = await this.categorieUseCase.getAll();
            if (typeof result === "string") {
                return ctx.json({ message: result });
            }
            return ctx.json({ message: result });
        }
       
}

//import type { Context } from "hono";
//
//export class CategorieController implements CategorieUseCase {
//
//}
//
