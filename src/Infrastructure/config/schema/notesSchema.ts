import { z } from "zod";
import type { ZodType } from "zod";
import type {
  createNotesDto,
  updateNotesDto,
  deleteNotesDto,
} from "../../../Application/dtos/notes.js";

export const createNotesSchema: ZodType<createNotesDto> = z.object({
  number: z.number().min(1, "La note doit être au moins 1").max(5, "La note ne peut pas dépasser 5"),
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
  articleId: z.string().min(1, "L'identifiant de l'article est requis"),
});

export const updateNotesSchema: ZodType<updateNotesDto> = z.object({
  id: z.string().min(1, "L'identifiant de la note est requis"),
  rate: z.number().min(1, "La note doit être au moins 1").max(5, "La note ne peut pas dépasser 5"),
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
  articleId: z.string().min(1, "L'identifiant de l'article est requis"),
});

export const deleteNotesSchema: ZodType<deleteNotesDto> = z.object({
  id: z.string().min(1, "L'identifiant de la note est requis"),
  rate: z.number().min(1, "La note doit être au moins 1").max(5, "La note ne peut pas dépasser 5"),
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
  articleId: z.string().min(1, "L'identifiant de l'article est requis"),
});