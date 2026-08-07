import { z } from "zod";

export const categorieSchema = z.object({
    name: z.string().min(1, "Le nom de la catégorie est requis"),
    description: z.string().optional(),
    image: z.string().optional(),
});