import { Hono } from "hono";
import { MessageController } from "../../controllers/messageController.js";
import { MessageUseCase } from "../../../Application/usecases/messageUseCase.js";
import { MessageRepoImpl } from "../../repositories/messageRepoImpl.js";
import { RoomRepositoryImpl } from "../../repositories/roomRepoImpl.js";
import { RoomUseCase } from "../../../Application/usecases/roomUseCase.js";
import { createNodeWebSocket } from "@hono/node-ws";
import type { Context } from "hono";
import type { WSContext, WSEvents, WSMessageReceive } from "hono/ws";
import type { Message } from "../../../Domaine/entities/message.js";
import type { createMessageDto, updateMessageDto } from "../../../Application/dtos/messages.js";
import { app } from "../../../index.js";

const roomRepo = new RoomRepositoryImpl();
const roomUseCase = new RoomUseCase(roomRepo);
const meesageRepo = new MessageRepoImpl();
const messageUseCase = new MessageUseCase(meesageRepo);
const messageRoutes = new Hono();

export const clients = new Map<string, WSContext>();
export const pendingMessages = new Map<string, string[]>();

enum Action {
  Send = "send",
  Update = "update",
  Delete = "delete",
}

type ActionPayload = {
  [Action.Send]: createMessageDto;
  [Action.Update]: updateMessageDto;
  [Action.Delete]: string;
};

export interface MessageContext<K extends Action> {
  action: K;
  message: ActionPayload[K];
}

export const chatWebSocket = (c: Context) => {
  const id = c.req.param("id")!;
  return {
    onOpen: async (evt: Event, ws: WSContext<WebSocket>) => {
      clients.set(id, ws);
      console.log("WebSocket connected", id);
      ws.send("connected")
      if (pendingMessages.has(id)) {
        pendingMessages.get(id)!.forEach(async (messageId) => {
          const message = await messageUseCase.getMessage(messageId);
          ws.send(JSON.stringify(message));
        });
        pendingMessages.delete(id);
      }
    },
    onMessage: async (evt: MessageEvent<WSMessageReceive>, ws: WSContext<WebSocket>) => {
      const payload = evt.data.toString();
      const message: MessageContext<Action> = JSON.parse(payload);
      console.log("WebSocket message", message);
      switch (message.action) {
        case "send":
          const res = await messageUseCase.createMessage(message.message as ActionPayload[Action.Send]);
          switch (typeof res) {
            case "string":
              ws.send(JSON.stringify(res));
              break;
            case "object":
              const room = await roomUseCase.getRoomById(res.roomId);
              switch (typeof room) {
                case "string":
                  ws.send(JSON.stringify(room));
                  break;
                case "object":
                  const receiverId = room.buyerId === id ? room.sellerId : room.buyerId;
                  if (clients.has(receiverId)) {
                    const receiver = clients.get(receiverId)!;
                    receiver.send(JSON.stringify(res));
                  } else {
                    pendingMessages.set(receiverId, [res.id]);
                  }
                  break;
              }
              break;
          }
          break;
        case "update":
          const update = await messageUseCase.updateMessage(message.message as ActionPayload[Action.Update]);
          switch (typeof update) {
            case "string":
              ws.send(JSON.stringify(update));
              break;
            case "object":
              const room = await roomUseCase.getRoomById(update.roomId);
              switch (typeof room) {
                case "string":
                  ws.send(JSON.stringify(room));
                  break;
                case "object":
                  const receiverId = room.buyerId === id ? room.sellerId : room.buyerId;
                  if (clients.has(receiverId)) {
                    const receiver = clients.get(receiverId)!;
                    receiver.send(JSON.stringify(update));
                  } else {
                    pendingMessages.set(receiverId, [update.id]);
                  }
                  break;
              }
              break;
          }
          break;
        case "delete":
          const deleted = await messageUseCase.deleteMessage(message.message as ActionPayload[Action.Delete]);
          ws.send(deleted);
          break;
      }
    },
    onClose: (evt: Event, ws: WSContext<WebSocket>) => {
      clients.delete(id);
    },
  }
};
