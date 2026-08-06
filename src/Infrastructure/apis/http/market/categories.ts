import { Hono } from "hono";
import { CategorieController } from "../../../controllers/categorieController.js";
import { CategorieUseCase } from "../../../../Application/usecases/categorieUseCase.js";
import { CategorieRepoImpl } from "../../../repositories/categorieRepoImpl.js";

const categorieRepository = new CategorieRepoImpl();
const categorieUseCase = new CategorieUseCase(categorieRepository);
const categorieController = new CategorieController(categorieUseCase);

export const categorieRoutes = new Hono();
categorieRoutes.post("/categories/create", async (c) => {
  return categorieController.create(c);
});
categorieRoutes.get("/categories", async (c) => {
  return c.json({ message: "Route Categorie" });
});
categorieRoutes.patch("/categories/update", async (c) => {
  return categorieController.update(c);
});
categorieRoutes.delete("/categories/delete", async (c) => {
  return categorieController.delete(c);
});
// Register specific routes BEFORE dynamic ones to avoid collisions
categorieRoutes.get("/all", async (c) => {
  return categorieController.getAll(c);
});
categorieRoutes.get("/categories/:name", async (c) => {
  return categorieController.getAll(c);
});
