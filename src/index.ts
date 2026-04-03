import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { corsMiddleware } from "./Infrastructure/http/middleware/cors.js";
import { authMiddleware } from "./Infrastructure/http/middleware/auth.js";
import { userRoutes } from "./Infrastructure/http/routes/market/user.js";
import { chatRoutes } from "./Infrastructure/http/routes/market/chat.js";
import { cartRoutes } from "./Infrastructure/http/routes/market/cart.js";
import { categorieRoutes } from "./Infrastructure/http/routes/market/categories.js";
import { articleRoutes } from "./Infrastructure/http/routes/market/articles.js";
import { commandeRoutes } from "./Infrastructure/http/routes/market/commandes.js";
import { createNodeWebSocket } from "@hono/node-ws";
import type { WSContext, WSMessageReceive } from "hono/ws";
import type { Message } from "./Domaine/entities/message.js";

export const app = new Hono();

app.use(
  "/*",
  cors({
    origin: "http://localhost:1420",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

const { injectWebSocket, upgradeWebSocket } = createNodeWebSocket({
  app,
  baseUrl: `http://localhost:${3000}`,
});

export const clients = new Set<WSContext>();

app.get(
  "/ws/:id",
  upgradeWebSocket((c) => {
    const id = c.req.param("id");
    return {
      onOpen: (event, context) => {
        const client = context;
        clients.add(client);
        client.send('connected successfully')
      },
      onMessage: (evt) => {
        const message: WSMessageReceive = evt.data;
      },
      onError: (evt) => {},
      onClose: () => {
        clients.delete(id);
      },
    };
  }),
);

//app.use("*", corsMiddleware);
//app.use("/api/auth/*", authMiddleware);
app.use("*", logger());

app.get("/", (c) => c.json({ message: "Hello Hono!" }));

app.route("/", userRoutes);
app.route("/chat", chatRoutes);
app.route("/cart", cartRoutes);
app.route("/categories", categorieRoutes);
app.route("/articles", articleRoutes);
app.route("/order", commandeRoutes);

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const server = serve(
  {
    fetch: app.fetch,
    port: port,
    hostname: "0.0.0.0",
  },
  () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
  },
);
injectWebSocket(server);
