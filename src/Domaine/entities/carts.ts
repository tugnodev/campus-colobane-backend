import type { Articles } from "./articles.js";

type item = {
  article: Articles;
  quantity: number;
};

export type Carts = {
  id: Promise<string>;
  card_details: item[];
  user_id: string;
};
