import type { JsonValue } from "../../../prisma/generated/prisma/runtime/library.js";

export enum OrderStatus {
  VALIDEE = "valide",
  ATTENTE = "attente",
  ANNULEE = "annulee",
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
