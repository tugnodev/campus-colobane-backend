import type { linkToArticleDto } from "../../../Application/dtos/cart.js";
import type { categorieDto, updateCategorieDto } from "../../../Application/dtos/categorie.js";

export interface OCategorieRepo {
  createCategorie(categorie: categorieDto): Promise<categorieDto | string>;
  updateCategorie(categorie: updateCategorieDto): Promise<categorieDto | string>;
  deleteCategorie(name: string): Promise<string>;
  getAllCategories(): Promise<categorieDto[] | string>;
  linkToArticle(data: linkToArticleDto): Promise<string>;
  unLinkToArticle(data: linkToArticleDto): Promise<string>;
}
