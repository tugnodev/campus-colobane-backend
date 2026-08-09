import { CategorieUseCase } from "../../Application/usecases/categorieUseCase.js";
import type { categorieDto, updateCategorieDto } from "../../Application/dtos/categorie.js";

export class CategorieController {
  private categorieUseCase: CategorieUseCase;
  constructor(categorieUseCase: CategorieUseCase) {
    this.categorieUseCase = categorieUseCase;
  }

  async create(categorieData: categorieDto) {
    return this.categorieUseCase.createCategorie(categorieData);
  }

  async update(categorieData: updateCategorieDto) {
    return this.categorieUseCase.updateCategorie(categorieData);
  }

  async delete(id: string) {
    return this.categorieUseCase.deleteCategorie(id);
  }

  async getAll() {
    return this.categorieUseCase.getAllCategories();
  }

  async getByName(name: string) {
    return this.categorieUseCase.getCategorieByName(name);
  }
}