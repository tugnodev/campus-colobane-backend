import type { Prisma } from "../../generated/prisma/index.js";
import type { JsonValue } from "../../generated/prisma/runtime/client.js";
import type { Articles } from "./articles.js";

type item = {
  article: Articles;
  quantity: number;
};

export type Carts = {
  cart: JsonValue | item[];
  userId: string;
};
