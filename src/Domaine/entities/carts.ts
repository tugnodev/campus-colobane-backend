import type { Articles } from "./articles.js";

type item = {
  article: Articles;
  quantity: number;
};

export type Carts = {
  cart: item[];
  userId: string;
};
