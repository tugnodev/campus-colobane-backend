import { z } from "zod";

export const CreateUserSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1, "le nom est requis"),
  email: z.email("Le email est requis").min(1, "Email is required"),
  password: z.string("Le mot de passe est requis").min(8, "le mot de passe doit contenir au moins 8 caractères"),
  image: z.string().optional(),
  address: z.enum(["UADB", "UGB", "UCAD","UASZ","UT"]).optional(),
  vendeur: z.boolean().optional(),
  rememberMe: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const UpdateUserSchema = z.object({
  id: z.uuid(),
  name: z.string().optional(),
  email: z.email("Le email est requis").optional(),
  password: z.string("Le mot de passe est requis").min(8, "le mot de passe doit contenir au moins 8 caractères").optional(),
  image: z.string().optional(),
  address: z.enum(["UADB", "UGB", "UCAD","UASZ","UT"]).optional(),
  vendeur: z.boolean().optional(),
})

export const TurnToVendorSchema = z.object({
  id: z.uuid(),
  address: z.enum(["UADB", "UGB", "UCAD","UASZ","UT"]),
  phone: z.number().min(8, "Le numéro de téléphone doit contenir au moins 8 chiffres"),
});

export const UserLoginSchema = z.object({
  email: z.email("Le email est requis").min(1, "Email is required"),
  password: z.string("Le mot de passe est requis").min(8, "le mot de passe doit contenir au moins 8 caractères"),
});

export const AuthPackSchema = z.object({
  token: z.string().nullable(),
  user: z.object({
    id: z.uuid(),
    name: z.string().min(1, "le nom est requis"),
    email: z.email("Le email est requis").min(1, "Email is required"),
    image: z.string().optional(),
    address: z.enum(["UADB", "UGB", "UCAD","UASZ","UT"]).optional(),
    vendeur: z.boolean().optional(),
  }).nullable()
})

export const UserStatsSchema = z.object({
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