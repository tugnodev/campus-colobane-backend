import { z } from "zod";
import type { ZodType } from "zod";
import type {
  createRoomDto,
  updateRoomDto,
  deleteRoomDto,
} from "../../../Application/dtos/room.js";

export const createRoomSchema: ZodType<createRoomDto> = z.object({
  buyerId: z.string().min(1, "L'identifiant de l'acheteur est requis"),
  sellerId: z.string().min(1, "L'identifiant du vendeur est requis"),
});

export const updateRoomSchema: ZodType<updateRoomDto> = z.object({
  id: z.string().min(1, "L'identifiant de la salle est requis"),
  buyerId: z.string().min(1, "L'identifiant de l'acheteur est requis"),
  sellerId: z.string().min(1, "L'identifiant du vendeur est requis"),
});

export const deleteRoomSchema: ZodType<deleteRoomDto> = z.object({
  id: z.string().min(1, "L'identifiant de la salle est requis"),
  buyerId: z.string().min(1, "L'identifiant de l'acheteur est requis"),
  sellerId: z.string().min(1, "L'identifiant du vendeur est requis"),
});