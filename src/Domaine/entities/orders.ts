import type { JsonValue } from "../../../prisma/generated/prisma/runtime/library.js";

export enum OrderStatus {
  ACCEPTED = "accepted",
  SHIPPED = "shipped",
  DELIVRED = "delivred",
  CANCELLED = "cancelled",
}

type ADetails = {
  articleId: string;
  sellerId: string;
  quantity: number;
};

export type Order = {
  id: string;
  articleDetails: JsonValue;
  status: string;
  buyerId: string;
  sellerId: string;
  createdAt: Date;
  updatedAt: Date;
};
