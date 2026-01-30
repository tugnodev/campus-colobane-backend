import type { Articles } from "../../Domaine/entities/articles.js";
import type { JsonValue } from "../../generated/prisma/runtime/client.js";

enum OrderStatus {
  ACCEPTED = "accepted",
  SHIPPED = "shipped",
  DELIVRED = "delivred",
  CANCELLED = "cancelled",
}

type article_details = {
  articleId: Articles;
  quantity: number;
};

export interface createOrderDto {
  articleDetails: article_details[];
  buyerId: string;
  sellerId: string;
}

export interface updateOrderDto {
  id: string;
  articleDetails?: article_details[] | JsonValue;
  buyerId?: string;
  sellerId?: string;
  status?: OrderStatus;
}
