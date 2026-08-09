import { z } from "zod";
import type { ZodType } from "zod";
import type { categorieDto, updateCategorieDto } from "../../../Application/dtos/categorie.js";

export const categorieSchema: ZodType<categorieDto> = z.object({
  name: z.string().trim().min(1, "Le nom de la catégorie est requis"),
  description: z.string().trim().optional(),
  image: z.string().optional(),
});

export const updateCategorieSchema: ZodType<updateCategorieDto> = z.object({
  name: z.string().trim().min(1, "Le nom de la catégorie est requis"),
  description: z.string().trim().optional(),
  image: z.string().optional(),
});