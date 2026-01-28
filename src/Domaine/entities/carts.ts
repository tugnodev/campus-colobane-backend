import type { Prisma } from "../../generated/prisma/index.js";
import type { Articles } from "./articles.js";

type item = {
  article: Articles;
  quantity: number;
};

export type Carts = {
  id: string;
  cart: item[] | Prisma.JsonValue;
  user_id: string;
};
