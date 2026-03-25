import type { JsonValue } from "@prisma/client/runtime/client";
import type { Articles } from "./articles.js";

type item = {
  article: Articles;
  quantity: number;
};

export type Carts = {
  cart: JsonValue | item[];
  userId: string;
};
