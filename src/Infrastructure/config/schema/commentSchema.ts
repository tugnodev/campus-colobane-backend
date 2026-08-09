import { z } from "zod";
import type { ZodType } from "zod";
import type {
  createCommentDto,
  updateCommentDto,
  createRateDto,
  updateRateDto,
} from "../../../Application/dtos/comment.js";

export const createCommentSchema: ZodType<createCommentDto> = z.object({
  articleId: z.string().min(1, "L'identifiant de l'article est requis"),
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
  comment: z.string().min(1, "Le contenu du commentaire est requis"),
});

export const updateCommentSchema: ZodType<updateCommentDto> = z.object({
  id: z.string().min(1, "L'identifiant du commentaire est requis"),
  articleId: z.string().min(1, "L'identifiant de l'article est requis"),
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
  comment: z.string().min(1, "Le contenu du commentaire est requis").optional(),
});

export const createRateSchema: ZodType<createRateDto> = z.object({
  articleId: z.string().min(1, "L'identifiant de l'article est requis"),
  buyerId: z.string().min(1, "L'identifiant de l'acheteur est requis"),
  rate: z.number().min(1, "La note doit être au moins 1").max(5, "La note ne peut pas dépasser 5"),
});

export const updateRateSchema: ZodType<updateRateDto> = z.object({
  id: z.string().min(1, "L'identifiant de la note est requis"),
  articleId: z.string().min(1, "L'identifiant de l'article est requis"),
  buyerId: z.string().min(1, "L'identifiant de l'acheteur est requis"),
  rate: z.number().min(1, "La note doit être au moins 1").max(5, "La note ne peut pas dépasser 5").optional(),
});