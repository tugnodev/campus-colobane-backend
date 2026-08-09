import { z } from "zod";
import { ZodType } from "zod";
import  { 
  address,
  type createUserDto,
  type updateUserDto,
  type turnToVendorDto,
  type userLoginDto,
  type authPack,
  type userStatsDto
 } from "../../../Application/dtos/user.js";

 import type { User } from "../../../Domaine/entities/user.js";

 export const addressSchema = z.enum(address, {
  message: "L'adresse doit être une université valide (UADB, UGB, UCAD, UASZ, UT)",
});

export const userSchema: ZodType<User> = z.object({
  id: z.uuid(),
  name: z.string().min(1, "Le nom est requis"),
  email: z.email("Format d'email invalide").min(1, "L'email est requis"),
  emailVerified: z.boolean(),
  vendeur: z.boolean(),
  code: z.number().nullable(),
  address: z.string().nullable(),
  image: z.union([z.string(), z.null(), z.undefined()]),
  certified: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});



export const createUserSchema: ZodType<createUserDto> = z.object({
  name: z.string().min(1, "le nom est requis"),
  email: z.email("Le email est requis").min(1, "Email is required"),
  password: z.string("Le mot de passe est requis").min(8, "le mot de passe doit contenir au moins 8 caractères"),
  image: z.string().optional(),
  address: addressSchema.optional(),
  vendeur: z.boolean().optional(),
  rememberMe: z.boolean().optional(),
});

export const updateUserSchema: ZodType<updateUserDto> = z.object({
  id: z.uuid(),
  name: z.string().optional(),
  email: z.email("Le email est requis").optional(),
  password: z.string("Le mot de passe est requis").min(8, "le mot de passe doit contenir au moins 8 caractères").optional(),
  image: z.string().optional(),
  address: addressSchema,
  vendeur: z.boolean().optional(),
})

export const turnToVendorSchema: ZodType<turnToVendorDto> = z.object({
  id: z.uuid(),
  address: addressSchema,
  phone: z.number().min(8, "Le numéro de téléphone doit contenir au moins 8 chiffres"),
});

export const userLoginSchema: ZodType<userLoginDto> = z.object({
  email: z.email("Le email est requis").min(1, "Email is required"),
  password: z.string("Le mot de passe est requis").min(8, "le mot de passe doit contenir au moins 8 caractères"),
});

export const authPackSchema: ZodType<authPack> = z.object({
  token: z.string().nullable(),
  user: z.union([userSchema, z.null(), z.undefined()]),
});

export const userStatsSchema: ZodType<userStatsDto> = z.object({
  articles: z.object({
    total: z.number().min(0, "Le nombre total d'articles ne peut pas être négatif"),
    rupture: z.number().min(0, "Le nombre d'articles en rupture ne peut pas être négatif"),
  }),
  commandes: z.object({
    total: z.number().min(0, "Le nombre total de commandes ne peut pas être négatif"),
    attente: z.number().min(0, "Le nombre de commandes en attente ne peut pas être négatif"),
    acceptees: z.number().min(0, "Le nombre de commandes acceptées ne peut pas être négatif"),
    annulees: z.number().min(0, "Le nombre de commandes annulées ne peut pas être négatif"),
  }),
});