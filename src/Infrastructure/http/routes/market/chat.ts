import { Hono } from "hono";
import { MessageController } from "../../controllers/messageController.js";
import { MessageUseCase } from "../../../../Application/usecases/messageUseCase.js";
import { MessageRepoImpl } from "../../../../Infrastructure/repositories/messageRepoImpl.js";
import { WebSocketHandler } from "../../../../Infrastructure/websocket/websocketService.js";

const messageRepository = new MessageRepoImpl();
const notificationService = new WebSocketHandler();
const messageUseCase = new MessageUseCase(
  messageRepository,
  notificationService,
);
const messageController = new MessageController(messageUseCase);

export const chatRoutes = new Hono();
chatRoutes.post("/chat/create", async (c) => {
  return await messageController.create(c);
});
// chatRoutes.get("/", async (c) => {
//   return c.json({ message: "Hello World" });
// });
chatRoutes.patch("/chat/update", async (c) => {
  return await messageController.update(c);
});
chatRoutes.delete("/chat/delete", async (c) => {
  return await messageController.delete(c);
});
chatRoutes.get("/chat/all", async (c) => {
  return c.json({ message: "Hello World" });
});
chatRoutes.get("/chat/:id/:receiver_id", async (c) => {
  return await messageController.getByUserId(c);
});
