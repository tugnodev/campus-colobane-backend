import { z } from "zod";
import type { ZodType } from "zod";
import type { createOrderDto, updateOrderDto } from "../../../Application/dtos/order.js";
import { OrderStatus } from "../../../Application/dtos/order.js";
import type { Items } from "../../../Domaine/entities/orders.js";

export const itemsSchema: ZodType<Items> = z.object({
  articleId: z.string().min(1, "L'identifiant de l'article est requis"),
  quantity: z.number().min(1, "La quantité doit être au moins 1"),
});

export const orderStatusSchema = z.enum(OrderStatus, {
  message: "Le statut de la commande doit être valide (valide, attente, annulee)",
});

export const createOrderSchema: ZodType<createOrderDto> = z.object({
  items: z.array(itemsSchema).min(1, "Au moins un article est requis"),
  buyerId: z.string().min(1, "L'identifiant de l'acheteur est requis"),
  sellerId: z.string().min(1, "L'identifiant du vendeur est requis"),
});

export const updateOrderSchema: ZodType<updateOrderDto> = z.object({
  id: z.string().min(1, "L'identifiant de la commande est requis"),
  items: z.array(itemsSchema).min(1, "Au moins un article est requis").optional(),
  buyerId: z.string().min(1, "L'identifiant de l'acheteur est requis").optional(),
  sellerId: z.string().min(1, "L'identifiant du vendeur est requis").optional(),
  status: orderStatusSchema,
});