import { Hono } from "hono";
import { CategorieController } from "../../../controllers/categorieController.js";
import { CategorieUseCase } from "../../../../Application/usecases/categorieUseCase.js";
import { CategorieRepoImpl } from "../../../repositories/categorieRepoImpl.js";
import { validateJson } from "../../../middleware/valideSchema.js";
import { categorieSchema, updateCategorieSchema } from "../../../config/schema/index.js";

const categorieRepository = new CategorieRepoImpl();
const categorieUseCase = new CategorieUseCase(categorieRepository);
const categorieController = new CategorieController(categorieUseCase);

export const categorieRoutes = new Hono();

categorieRoutes.post("/categories/create", validateJson(categorieSchema), async (c) => {
  const data = c.req.valid("json");
  const result = await categorieController.create(data);
  if (typeof result === "string") {
    return c.text(result);
  }
  return c.json(result);
});

categorieRoutes.patch("/categories/update", validateJson(updateCategorieSchema), async (c) => {
  const data = c.req.valid("json");
  const result = await categorieController.update(data);
  if (typeof result === "string") {
    return c.text(result);
  }
  return c.json(result);
});

categorieRoutes.delete("/categories/:id", async (c) => {
  const id = c.req.param("id");
  const result = await categorieController.delete(id);
  return c.text(result);
});

// Routes spécifiques enregistrées avant les routes dynamiques
categorieRoutes.get("/all", async (c) => {
  const result = await categorieController.getAll();
  if (typeof result === "string") {
    return c.text(result);
  }
  return c.json(result);
});

categorieRoutes.get("/categories/:name", async (c) => {
  const name = c.req.param("name");
  const result = await categorieController.getByName(name);
  if (typeof result === "string") {
    return c.text(result);
  }
  return c.json(result);
});
