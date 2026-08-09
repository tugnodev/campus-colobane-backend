export enum OrderStatus {
  VALIDEE = "valide",
  ATTENTE = "attente",
  ANNULEE = "annulee",
}

export type Items = {
  articleId: string;
  quantity: number;
};

export type Order = {
  id: string;
  items: Items[];
  status: string;
  buyerId: string;
  sellerId: string;
  createdAt: Date;
  updatedAt: Date;
};
