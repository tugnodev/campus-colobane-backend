import type { OCategorieRepo } from "../../Domaine/ports/outputs/categorieRepo.js";
import type { ICategorieService } from "../../Domaine/ports/inputs/categorieService.js";
import type { categorieDto,updateCategorieDto} from "../dtos/categorie.js";
import type { linkToArticleDto } from "../dtos/cart.js";

export class CategorieUseCase implements ICategorieService {
  private categorieRepo: OCategorieRepo;

  constructor(categorieRepo: OCategorieRepo) {
    this.categorieRepo = categorieRepo;
  }

  async createCategorie(
    categorieData: categorieDto,
  ): Promise<categorieDto | string> {
    return this.categorieRepo.createCategorie(categorieData);
  }

  async updateCategorie(
    categorieData: updateCategorieDto,
  ): Promise<updateCategorieDto | string> {
    return this.categorieRepo.updateCategorie(categorieData);
  }

  async deleteCategorie(name: string): Promise<string> {
    await this.categorieRepo.deleteCategorie(name);
    return `Categorie with name ${name} has been deleted successfully.`;
  }

  async getAllCategories(): Promise<categorieDto[] | string> {
    return this.categorieRepo.getAllCategories();
  }

  async linkToArticle(data: linkToArticleDto): Promise<string> {
    return this.categorieRepo.linkToArticle(data);
  }

  async unLinkToArticle(data: linkToArticleDto): Promise<string> {
    return this.categorieRepo.unLinkToArticle(data);
  }
  async getCategorieByName(name: string): Promise<categorieDto | string> {
    const categories = await this.categorieRepo.getAllCategories();
    if (typeof categories === "string") {
      return categories; // Return the error message if it's a string
    }
    const category = categories.find((cat) => cat.name === name);
    if (!category) {
      return `Categorie with name ${name} not found.`;
    }
    return category;
  }
}
