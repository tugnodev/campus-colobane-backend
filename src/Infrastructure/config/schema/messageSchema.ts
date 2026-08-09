import { z } from "zod";
import type { ZodType } from "zod";
import type {
  createMessageDto,
  updateMessageDto,
  getConversationDto,
  broadcastMessageDto,
} from "../../../Application/dtos/messages.js";

export const createMessageSchema: ZodType<createMessageDto> = z.object({
  roomId: z.string().min(1, "L'identifiant de la room est requis"),
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
  sellerId: z.string().min(1, "L'identifiant du vendeur est requis").optional(),
  message: z.string().min(1, "Le message ne peut pas être vide"),
  articleId: z.string().min(1, "L'identifiant de l'article est requis").nullable(),
});

export const updateMessageSchema: ZodType<updateMessageDto> = z.object({
  id: z.string().min(1, "L'identifiant du message est requis"),
  roomId: z.string().min(1, "L'identifiant de la room est requis"),
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
  message: z.string().min(1, "Le message ne peut pas être vide"),
  articleId: z.string().min(1, "L'identifiant de l'article est requis").nullable(),
});

export const getConversationSchema: ZodType<getConversationDto> = z.object({
  roomId: z.string().min(1, "L'identifiant de la room est requis"),
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
});

export const broadcastMessageSchema: ZodType<broadcastMessageDto> = z.object({
  roomId: z.string().min(1, "L'identifiant de la room est requis"),
  payload: z.string().min(1, "Le payload ne peut pas être vide"),
});