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
import type { socketData } from "./Application/dtos/socket.js";
import { json } from "node:stream/consumers";
import { MessageController } from "./Infrastructure/http/controllers/messageController.js";
import { MessageRepoImpl } from "./Infrastructure/repositories/messageRepoImpl.js";
import { MessageUseCase } from "./Application/usecases/messageUseCase.js";
import type {
  createMessageDto,
  updateMessageDto,
} from "./Application/dtos/messages.js";

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

const messageRepo = new MessageRepoImpl();
const messageUseCase = new MessageUseCase(messageRepo);
const messageController = new MessageController(messageUseCase);
export const clients = new Map<string, WSContext>();
const pendingMessages = new Map<string, string[]>();

app.get(
  "/ws/:id",
  upgradeWebSocket((c) => {
    const id = c.req.param("id");

    return {
      onOpen: (event, context) => {
        const client = context;
        clients.set(id, client);
        client.send("connected successfully");
        const messages = pendingMessages.get(id);
        if (typeof messages === "object" && messages !== undefined) {
          for (const msg of messages) {
            client.send(msg);
          }
          pendingMessages.delete(id);
        }
      },
      onMessage: async (evt, ctx) => {
        const data: WSMessageReceive = evt.data as string;
        const message: socketData = JSON.parse(data);
        switch (message.type) {
          case "create":
            const data: createMessageDto = JSON.parse(message.payload);
            const msg = await messageUseCase.createMessage(data);
            switch (typeof msg) {
              case "string":
                clients
                  .get(id)
                  ?.send(JSON.stringify({ type: "error", payload: msg }));
                break;
              case "object":
                const client = clients.get(id);
                if (typeof client === "object" && client !== undefined) {
                  client.send(
                    JSON.stringify({
                      type: "create",
                      payload: JSON.stringify(msg),
                    }),
                  );
                } else {
                  pendingMessages.set(id, [
                    ...(pendingMessages.get(id) ?? []),
                    JSON.stringify(msg),
                  ]);
                }
                break;
            }
            break;
          case "delete":
            const idToDelete: string = JSON.parse(message.payload);
            const del = await messageUseCase.deleteMessage(idToDelete);
            if (del === "message deleted") {
              clients
                .get(id)
                ?.send(JSON.stringify({ type: "error", payload: del }));
            } else {
              clients
                .get(id)
                ?.send(
                  JSON.stringify({
                    type: "delete",
                    payload: JSON.stringify(del),
                  }),
                );
            }
            break;
          case "update":
            const toUpdate: updateMessageDto = JSON.parse(message.payload);
            const updated = await messageUseCase.updateMessage(toUpdate);
            if (typeof updated === "string") {
              clients
                .get(id)
                ?.send(JSON.stringify({ type: "error", payload: updated }));
            } else {
              clients
                .get(id)
                ?.send(
                  JSON.stringify({
                    type: "update",
                    payload: JSON.stringify(updated),
                  }),
                );
            }
            break;
        }
      },
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
