import { Hono } from "hono";
import { MessageController } from "../../controllers/messageController.js";
import { MessageUseCase } from "../../../../Application/usecases/messageUseCase.js";
import { MessageRepoImpl } from "../../../../Infrastructure/repositories/messageRepoImpl.js";
import { WebSocketHandler } from "../../../../Infrastructure/websocket/websocketService.js";

const messageRepository = new MessageRepoImpl();
const notificationService = new WebSocketHandler();
const messageUseCase = new MessageUseCase(messageRepository, notificationService);
const messageController = new MessageController(messageUseCase);

export const chatRoutes = new Hono();
chatRoutes.post('/create', async (c) => {
    return messageController.create(c);
});
chatRoutes.get('/', async (c) => {
    return c.json({ message: "Hello World" });
});
chatRoutes.patch('/update', async (c) => {
    return messageController.update(c);
});
chatRoutes.delete('/delete', async (c) => {
    return messageController.delete(c);
});
// Register specific routes BEFORE dynamic ones to avoid collisions
chatRoutes.get('/all', async (c) => {
    return c.json({ message: "Hello World" });
});
chatRoutes.get('/:id/:receiver_id', async (c) => {
    return messageController.getByUserId(c);
});
