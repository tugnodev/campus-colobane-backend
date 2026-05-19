import type { Items } from "../../Domaine/entities/orders.js";

export enum OrderStatus {
  VALIDEE = "valide",
  ATTENTE = "attente",
  ANNULEE = "annulee",
}

export interface createOrderDto {
  items: Items[];
  buyerId: string;
  sellerId: string;
}

export interface updateOrderDto {
  id: string;
  items?: Items[];
  buyerId?: string;
  sellerId?: string;
  status: OrderStatus;
}
