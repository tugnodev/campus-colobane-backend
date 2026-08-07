import { z } from "zod";

export const createOrderSchema = z.object({
    items: z.array(z.object({
        articleId: z.string("L'identifiant de l'article est requis"), 
        quantity: z.number().min(1, "La quantité doit être au moins 1")})).min(1, "Au moins un article est requis"),
    buyerId: z.string("L'identifiant de l'acheteur est requis"),
    sellerId: z.string("L'identifiant du vendeur est requis"),
    totalPrice: z.number().min(0, "Le prix total ne peut pas être négatif"),
    status: z.enum(["pending", "accepted", "cancelled"]).optional(),
});
    
