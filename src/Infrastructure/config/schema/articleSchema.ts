import { z } from "zod";
import type { ZodType } from "zod";
import type { createArticleDto, updateAticleDto } from "../../../Application/dtos/article.js";

export const articleSchema: ZodType<createArticleDto> = z.object({
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
  title: z.string().trim().min(1, "Le titre de l'article est requis"),
  images: z
    .array(z.string().min(1, "L'image de l'article est requise"))
    .min(1, "Au moins une image est requise"),
  category: z
    .array(z.string().min(1, "La catégorie de l'article est requise"))
    .min(1, "Au moins une catégorie est requise"),
  description: z.string().trim().min(1, "La description de l'article est requise"),
  price: z.number().min(0, "Le prix de l'article ne peut pas être négatif"),
  stock: z.number().min(0, "Le stock de l'article ne peut pas être négatif"),
});

export const updateArticleSchema: ZodType<updateAticleDto> = z.object({
  id: z.string().min(1, "L'identifiant de l'article est requis"),
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis").optional(),
  title: z.string().trim().min(1, "Le titre de l'article est requis").optional(),
  images: z
    .array(z.string().min(1, "L'image de l'article est requise"))
    .min(1, "Au moins une image est requise")
    .optional(),
  category: z
    .array(z.string().min(1, "La catégorie de l'article est requise"))
    .min(1, "Au moins une catégorie est requise")
    .optional(),
  description: z.string().trim().min(1, "La description de l'article est requise").optional(),
  price: z.number().min(0, "Le prix de l'article ne peut pas être négatif").optional(),
  stock: z.number().min(0, "Le stock de l'article ne peut pas être négatif").optional(),
});