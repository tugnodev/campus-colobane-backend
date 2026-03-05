import { Hono } from "hono";
import { ArticleController } from "../../controllers/articleController.js";
import { ArticleUseCase } from "../../../../Application/usecases/articleUseCase.js";
import { ArticleRepoImpl } from "../../../repositories/articleRepoImpl.js";

const articleRepo = new ArticleRepoImpl();
const articleUseCase = new ArticleUseCase(articleRepo);
const articleController = new ArticleController(articleUseCase);

export const articleRoutes = new Hono();
articleRoutes.post("/", async (c) => {
  return await articleController.createArticle(c);
});
articleRoutes.get("/all", async (c) => {
  console.log("Getting all articles");
  return await articleController.getAll(c);
});
articleRoutes.get("/:id", async (c) => {
  return await articleController.getById(c);
});
articleRoutes.delete("/:id", async (c) => {
  return await articleController.deleteArticle(c);
});
articleRoutes.patch("/:id", async (c) => {
  return await articleController.updateArticle(c);
});
