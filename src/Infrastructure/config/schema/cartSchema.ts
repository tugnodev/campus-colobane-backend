// import { z } from "zod";
// import type { ZodType } from "zod";
// import type {
//   item,
//   createCartDto,
//   updateCartDto,
//   cartDto,
//   linkToArticleDto,
// } from "../../../Application/dtos/cart.js";

// export const itemSchema: ZodType<item> = z.object({
//   articleId: z.string().min(1, "L'identifiant de l'article est requis"),
//   image: z.string().min(1, "L'image de l'article est requise"),
//   name: z.string().min(1, "Le nom de l'article est requis"),
//   price: z.number().min(0, "Le prix de l'article ne peut pas être négatif"),
// });

// export const createCartSchema: ZodType<createCartDto> = z.object({
//   userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
//   cart: z.array(itemSchema).min(1, "Le panier ne peut pas être vide"),
// });

// export const updateCartSchema: ZodType<updateCartDto> = z.object({
//   id: z.string().min(1, "L'identifiant du panier est requis"),
//   userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
//   cart: z.array(itemSchema).min(1, "Le panier ne peut pas être vide"),
// });

// export const cartSchema: ZodType<cartDto> = z.object({
//   id: z.string().min(1, "L'identifiant du panier est requis"),
//   userId: z.string().min(1, "L'identifiant de l'utilisateur est requis"),
//   cart: z.array(itemSchema).min(1, "Le panier ne peut pas être vide"),
// });

// export const linkToArticleSchema: ZodType<linkToArticleDto> = z.object({
//   name: z.string().min(1, "Le nom de l'article est requis"),
//   articleId: z.string().min(1, "L'identifiant de l'article est requis"),
// });