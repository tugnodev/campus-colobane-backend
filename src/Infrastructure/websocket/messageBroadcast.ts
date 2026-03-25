import type { Message } from "../../Domaine/entities/message.js";
import type {
  OMessageRepo,
  OMessageBroadcast,
} from "../../Domaine/ports/outputs/messageRepo.js";
import type { broadcastMessageDto } from "../../Application/dtos/messages.js";
import { createNodeWebSocket } from "@hono/node-ws";
import type { WSContext } from "hono/ws";
import { Hono } from "hono";

const app = new Hono();

const { injectWebSocket, upgradeWebSocket } = createNodeWebSocket({
  app,
  baseUrl: `http://localhost:${3000}`,
});

export class MessageBroadcast implements OMessageBroadcast {
  private clients = new Map<string, WSContext<WebSocket>>();
  broadcast(message: broadcastMessageDto): void {
    upgradeWebSocket((c) => {
      const id = c.req.param("id");
      console.log(`WebSocket opened for id: ${id}`);
      return {
        onMessage: (event, ws) => {
          console.log(event.source);
          ws.send(`Received message: ${event.data}`);
        },
      };
    });
    return "broadcasted";
  }
}
