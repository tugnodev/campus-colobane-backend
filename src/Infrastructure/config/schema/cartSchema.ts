import { z } from "zod";
import type { ZodType } from "zod";
import type {
  Item,
  createCartDto,
  updateCartDto,
  addToCartDto,
  linkToArticleDto,
} from "../../../Application/dtos/cart.js";
import type { Carts,ItemF } from "../../../Domaine/entities/carts.js";

export const itemSchema: ZodType<Item> = z.object({
  articleId: z.string().min(1, "L'identifiant de l'article est requis"),
  quantity: z.number().min(1, "La quantité de l'article doit être supérieure à 0"),
});


export const itemFSchema: ZodType<ItemF> = z.object({
  articleId: z.string().min(1, "L'identifiant de l'article est requis"),
  quantity: z.number().min(1, "La quantité de l'article doit être supérieure à 0"),
  name: z.string().min(1, "Le nom de l'article est requis"),
});

export const addToCartSchema: ZodType<addToCartDto> = z.object({
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
  item: itemSchema,
});

export const createCartSchema: ZodType<createCartDto> = z.object({
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
});

export const updateCartSchema: ZodType<updateCartDto> = z.object({
  id: z.string().min(1, "L'identifiant du panier est requis"),
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
  item: z.array(itemSchema).min(1, "Le panier ne peut pas être vide"),
});

export const cartSchema: ZodType<Carts> = z.object({
  id: z.string().min(1, "L'identifiant du panier est requis"),
  userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
  cart: z.array(itemSchema).min(1, "Le panier ne peut pas être vide"),
});

export const linkToArticleSchema: ZodType<linkToArticleDto> = z.object({
  name: z.string().min(1, "Le nom de l'article est requis"),
  articleId: z.string().min(1, "L'identifiant de l'article est requis"),
});
