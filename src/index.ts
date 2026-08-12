import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { userRoutes } from "./Infrastructure/apis/http/market/user.js";
import { chatRoutes } from "./Infrastructure/apis/http/market/chat.js";
import { cartRoutes } from "./Infrastructure/apis/http/market/cart.js";
import { categorieRoutes } from "./Infrastructure/apis/http/market/categories.js";
import { articleRoutes } from "./Infrastructure/apis/http/market/articles.js";
import { orderRoutes } from "./Infrastructure/apis/http/market/order.js";
import { createNodeWebSocket } from "@hono/node-ws";
import type { WSContext, WSMessageReceive } from "hono/ws";
import type { Message } from "./Domaine/entities/message.js";
import { json } from "node:stream/consumers";
import { MessageController } from "./Infrastructure/controllers/messageController.js";
import { MessageRepoImpl } from "./Infrastructure/repositories/messageRepoImpl.js";
import { MessageUseCase } from "./Application/usecases/messageUseCase.js";
import { chatWebSocket } from "./Infrastructure/apis/websocket/message.js";
import { roomRouts } from "./Infrastructure/apis/http/market/room.js";



export const app = new Hono();

//app.use(
//  "/*",
//  cors({
//    origin: "http://localhost:1420",
//    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//  }),
//);

const messageRepo = new MessageRepoImpl();
const messageUseCase = new MessageUseCase(messageRepo);
const messageController = new MessageController(messageUseCase);

export const { injectWebSocket, upgradeWebSocket } = createNodeWebSocket({
  app,
  baseUrl: `http://localhost:${3000}`,
});

//app.use("*", corsMiddleware);
//app.use("/api/auth/*", authMiddleware);
app.use("*", logger());

app.get("/ws/chat/:id", upgradeWebSocket(chatWebSocket));
app.get("/", (c) => c.json({ message: "Hello Hono!" }));

app.route("/", userRoutes);
app.route("/chat", chatRoutes);
app.route("/cart", cartRoutes);
app.route("/categories", categorieRoutes);
app.route("/articles", articleRoutes);
app.route("/order", orderRoutes);
app.route("/room", roomRouts);


const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const server = serve(
  {
    fetch: app.fetch,
    port: port,
    hostname: "localhost",
  },
  () => {
    console.log(`Server is running on http://localhost:${port}`);
  },
);
injectWebSocket(server);
