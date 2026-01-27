import type { JSONValue } from "hono/utils/types";
import type { Articles } from "./articles.js";

type item = {
  article: Articles;
  quantity: number;
};

export type Carts = {
  id: string;
  cart: item[] | JSONValue;
  user_id: string;
};
