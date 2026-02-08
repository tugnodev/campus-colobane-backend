import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { corsMiddleware } from "./Infrastructure/http/middleware/cors.js";
import { authMiddleware } from "./Infrastructure/http/middleware/auth.js";
import { userRoutes } from "./Infrastructure/http/routes/market/user.js";
import { chatRoutes } from "./Infrastructure/http/routes/market/chat.js";
import { cartRoutes } from "./Infrastructure/http/routes/market/cart.js";
import { categorieRoutes } from "./Infrastructure/http/routes/market/categories.js";
import { articleRoutes } from "./Infrastructure/http/routes/market/articles.js";
import { commandeRoutes } from "./Infrastructure/http/routes/market/commandes.js";
import { createNodeWebSocket, type NodeWebSocketInit } from "@hono/node-ws";

const app = new Hono();
const webSocketInit: NodeWebSocketInit = {
  app,
  baseUrl: `http://localhost:${3000}`,
};
const ws = createNodeWebSocket(webSocketInit);

app.use("*", corsMiddleware);
app.use("/api/auth/*", authMiddleware);
app.use("*", logger());

app.get("/", (c) => c.json({ message: "Hello Hono!" }));

app.route("/", userRoutes);
app.route("/chat", chatRoutes);
app.route("/cart", cartRoutes);
app.route("/categories", categorieRoutes);
app.route("/articles", articleRoutes);
app.route("/commandes", commandeRoutes);

//ws.upgradeWebSocket();

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

serve(
  {
    fetch: app.fetch,
    port: port,
  },
  () => {
    console.log(`Server is running on http://localhost:${port}`);
  },
);
