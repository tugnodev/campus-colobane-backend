import { Hono } from "hono";
import { CategorieController } from "../../controllers/categorieController.js";
import { CategorieUseCase } from "../../../../Application/usecases/categorieUseCase.js";
import { CategorieRepoImpl } from "../../../../Infrastructure/repositories/categorieRepoImp.js";
import { WebSocketHandler } from "../../../../Infrastructure/websocket/websocketService.js";

const categorieRepository = new CategorieRepoImpl();
const notificationService = new WebSocketHandler();
const categorieUseCase = new CategorieUseCase(categorieRepository, notificationService);
const categorieController = new CategorieController(categorieUseCase);

export const categorieRoutes = new Hono();
categorieRoutes.post('/create', async (c) => {
    return categorieController.create(c);
});
chatRoutes.get('/', async (c) => {
    return c.json({ message: "Route Categorie" });
});
categorieRoutes.patch('/update', async (c) => {
    return categorieController.update(c);
});
categorieRoutes.delete('/delete', async (c) => {
    return categorieController.delete(c);
});
// Register specific routes BEFORE dynamic ones to avoid collisions
categorieRoutes.get('/all', async (c) => {
    return c.json({ message: "Route Categorie" });
});
categoRoutes.get('/:name', async (c) => {
    return messageController.getByUserId(c);
});
