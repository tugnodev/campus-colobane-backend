import {
  pgTable,
  text,
  integer,
  boolean,
  timestamp,
  json,
  primaryKey,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/_relations";

// ---------- USER ----------
export const user = pgTable("user", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull().default(false),
  vendeur: boolean("vendeur").notNull().default(false),
  code: integer("code"),
  address: text("address"),
  image: text("image"),
  certified: boolean("certified").notNull().default(false),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const userRelations = relations(user, ({ many }) => ({
  articles: many(articles),
  comments: many(comments),
  messagesSent: many(messages),
  ordersAsBuyer: many(orders, { relationName: "Buyer" }),
  ordersAsSeller: many(orders, { relationName: "Seller" }),
  roomsAsBuyer: many(room, { relationName: "BuyerRoom" }),
  roomsAsSeller: many(room, { relationName: "SellerRoom" }),
  carts: many(carts),
  accounts: many(account),
  sessions: many(session),
  numbers: many(numbers),
  appreciations: many(notes),
}));

// ---------- NOTES ----------
export const notes = pgTable(
  "Notes",
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    number: integer("number").notNull(),
    userId: text("userId").notNull().references(() => user.id),
    articleId: text("articleId").notNull().references(() => articles.id),
  },
  (t) => ({
    userArticleUnique: uniqueIndex("notes_user_article_unique").on(t.userId, t.articleId),
  })
);

export const notesRelations = relations(notes, ({ one }) => ({
  user: one(user, { fields: [notes.userId], references: [user.id] }),
  article: one(articles, { fields: [notes.articleId], references: [articles.id] }),
}));

// ---------- CATEGORIES ----------
export const categories = pgTable("Categories", {
  name: text("name").primaryKey(),
  description: text("description"),
  image: text("image"),
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  categoriesByArticle: many(cateByArticle),
}));

// ---------- CATE BY ARTICLE ----------
export const cateByArticle = pgTable(
  "CateByArticle",
  {
    articleId: text("articleId").notNull().references(() => articles.id),
    categoryId: text("categoryId").notNull().references(() => categories.name),
  },
  (t) => ({
    articleCategoryUnique: uniqueIndex("cate_article_category_unique").on(
      t.articleId,
      t.categoryId
    ),
  })
);

export const cateByArticleRelations = relations(cateByArticle, ({ one }) => ({
  article: one(articles, { fields: [cateByArticle.articleId], references: [articles.id] }),
  category: one(categories, { fields: [cateByArticle.categoryId], references: [categories.name] }),
}));

// ---------- ARTICLES ----------
export const articles = pgTable("Articles", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text("userId").notNull().references(() => user.id),
  title: text("title").notNull(),
  images: text("images").array().notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  stock: integer("stock").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const articlesRelations = relations(articles, ({ one, many }) => ({
  user: one(user, { fields: [articles.userId], references: [user.id] }),
  comments: many(comments),
  messages: many(messages),
  rates: many(notes),
  categories: many(cateByArticle),
  orderItems: many(orderItems),
}));

// ---------- COMMENTS ----------
export const comments = pgTable("Comments", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  articleId: text("articleId").notNull().references(() => articles.id),
  userId: text("userId").notNull().references(() => user.id),
  comment: text("comment").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const commentsRelations = relations(comments, ({ one }) => ({
  article: one(articles, { fields: [comments.articleId], references: [articles.id] }),
  buyer: one(user, { fields: [comments.userId], references: [user.id] }),
}));

// ---------- ROOM ----------
export const room = pgTable("Room", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  buyerId: text("buyerId").notNull().references(() => user.id),
  sellerId: text("sellerId").notNull().references(() => user.id),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const roomRelations = relations(room, ({ one, many }) => ({
  buyer: one(user, { fields: [room.buyerId], references: [user.id], relationName: "BuyerRoom" }),
  seller: one(user, { fields: [room.sellerId], references: [user.id], relationName: "SellerRoom" }),
  messages: many(messages),
}));

// ---------- MESSAGES ----------
export const messages = pgTable("Messages", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  roomId: text("roomId").notNull().references(() => room.id),
  userId: text("userId").notNull().references(() => user.id),
  message: text("message").notNull(),
  articleId: text("articleId").references(() => articles.id),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const messagesRelations = relations(messages, ({ one }) => ({
  room: one(room, { fields: [messages.roomId], references: [room.id] }),
  sender: one(user, { fields: [messages.userId], references: [user.id], relationName: "Sender" }),
  article: one(articles, { fields: [messages.articleId], references: [articles.id] }),
}));

// ---------- NUMBERS ----------
export const numbers = pgTable("Numbers", {
  number: integer("number").primaryKey(),
  sellerId: text("sellerId").notNull().references(() => user.id),
});

export const numbersRelations = relations(numbers, ({ one }) => ({
  user: one(user, { fields: [numbers.sellerId], references: [user.id] }),
}));

// ---------- CARTS ----------
export const carts = pgTable("Carts", {
  userId: text("userId").primaryKey().references(() => user.id),
  cart: json("cart").notNull(),
});

export const cartsRelations = relations(carts, ({ one }) => ({
  user: one(user, { fields: [carts.userId], references: [user.id] }),
}));

// ---------- ORDER ITEMS ----------
export const orderItems = pgTable(
  "OrderItems",
  {
    orderId: text("orderId").notNull(),
    articleId: text("articleId").notNull().references(() => articles.id),
    quantity: integer("quantity").notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.orderId, t.articleId] }),
  })
);

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  article: one(articles, { fields: [orderItems.articleId], references: [articles.id] }),
  order: one(orders, { fields: [orderItems.orderId], references: [orders.id] }),
}));

// ---------- ORDERS ----------
export const orders = pgTable("Orders", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  status: text("status").notNull(),
  buyerId: text("buyerId").notNull().references(() => user.id),
  sellerId: text("sellerId").notNull().references(() => user.id),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const ordersRelations = relations(orders, ({ one, many }) => ({
  buyer: one(user, { fields: [orders.buyerId], references: [user.id], relationName: "Buyer" }),
  seller: one(user, { fields: [orders.sellerId], references: [user.id], relationName: "Seller" }),
  items: many(orderItems),
}));

// ---------- AUTH: SESSION ----------
export const session = pgTable("session", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

// ---------- AUTH: ACCOUNT ----------
export const account = pgTable("account", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// ---------- AUTH: VERIFICATION ----------
export const verification = pgTable("verification", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});
