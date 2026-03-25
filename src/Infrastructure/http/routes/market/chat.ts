import { Hono } from "hono";
import { MessageController } from "../../controllers/messageController.js";
import { MessageUseCase } from "../../../../Application/usecases/messageUseCase.js";
import { MessageRepoImpl } from "../../../repositories/messageRepoImpl.js";
import { createNodeWebSocket } from "@hono/node-ws";
import { RoomUseCase } from "../../../../Application/usecases/roomUseCase.js";
import { RoomRepositoryImpl } from "../../../repositories/roomRepoImpl.js";

const messageRepository = new MessageRepoImpl();
const messageUseCase = new MessageUseCase(messageRepository);
const messageController = new MessageController(messageUseCase);

const roomRepository = new RoomRepositoryImpl();
const roomUseCase = new RoomUseCase(roomRepository);

export const chatRoutes = new Hono();

const { upgradeWebSocket } = createNodeWebSocket({
  app: chatRoutes,
  baseUrl: `http://localhost:${3000}`,
});

chatRoutes.get(
  "/:roomId",
  upgradeWebSocket(async (c) => {
    const roomId = c.req.param("roomId");
    const room = await roomUseCase.getRoomById(roomId);
    return {
      onOpen: (evt, ws) => {
        switch (typeof room) {
          case "string":
            ws.close();
            break;
          case "object":
            ws.send(JSON.stringify(room));
            break;
        }
      },
      onMessage: (evt) => {
        const message = evt.data;
      },
      onError: (evt) => {},
      onClose: () => {},
    };
  }),
);
