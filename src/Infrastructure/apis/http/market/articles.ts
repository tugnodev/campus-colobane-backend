import { Hono } from "hono";
import { ArticleController } from "../../../controllers/articleController.js";
import { ArticleUseCase } from "../../../../Application/usecases/articleUseCase.js";
import { ArticleRepoImpl } from "../../../repositories/articleRepoImpl.js";
import { validateJson } from "../../../middleware/valideSchema.js";
import { articleSchema, updateArticleSchema } from "../../../config/schema/index.js";

const articleRepo = new ArticleRepoImpl();
const articleUseCase = new ArticleUseCase(articleRepo);
const articleController = new ArticleController(articleUseCase);

export const articleRoutes = new Hono();

articleRoutes.post("/", validateJson(articleSchema), async (c) => {
  const data = c.req.valid("json");
  const res = await articleController.createArticle(data);
  return c.json(res);
});

articleRoutes.get("/all", async (c) => {
  const res = await articleController.getAll();
  return c.json(res);
});

articleRoutes.get("/user/:id", async (c) => {
  const id = c.req.param("id");
  const res = await articleController.getByUserId(id);
  return c.json(res);
});

articleRoutes.get("/search/:query", async (c) => {
  const query = c.req.param("query");
  const res = await articleController.searchArticles(query);
  return c.json(res);
});

articleRoutes.get("/:id", async (c) => {
  const id = c.req.param("id");
  const res = await articleController.getById(id);
  return c.json(res);
});

articleRoutes.delete("/:id", async (c) => {
  const id = c.req.param("id");
  const res = await articleController.deleteArticle(id);
  return c.json(res);
});

articleRoutes.patch(
  "/:id",
  validateJson(updateArticleSchema),
  async (c) => {
    const id = c.req.param("id");
    const data = c.req.valid("json");
    const res = await articleController.updateArticle({ ...data, id });
    return c.json(res);
  }
);