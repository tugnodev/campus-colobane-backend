import type { JsonValue } from "../../generated/prisma/runtime/client.js";

enum OrderStatus {
  ACCEPTED = "accepted",
  SHIPPED = "shipped",
  DELIVRED = "delivred",
  CANCELLED = "cancelled",
}

type ADetails = {
  article_id: string;
  quantity: number;
};

export type Order = {
  id: string;
  article_details: JsonValue;
  order_status: string;
  buyer_id: string;
  seller_id: string;
  createdAt: Date;
  updatedAt: Date;
};
