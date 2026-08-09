import { z } from "zod";
import type { ZodType } from "zod";
import type { categorieDto } from "../../../Application/dtos/categorie.js";

export const categorieSchema: ZodType<categorieDto> = z.object({
    name: z.string().min(1, "Le nom de la catégorie est requis"),
    description: z.string().optional(),
    image: z.string().optional(),
});