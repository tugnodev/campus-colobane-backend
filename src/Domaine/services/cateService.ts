import type { ICategorieService } from "../ports/inputs/categorieService.js";
import type { categorieDto } from "../../Application/dtos/categorie.js";
import type { OCategorieRepo } from "../ports/outputs/categorieRepo.js";


export class CategorieService implements ICategorieService {
    private categorieRepo: OCategorieRepo;

    constructor(categorieRepo: OCategorieRepo) {
        this.categorieRepo = categorieRepo;
    }

    async createCategorie(categorie: categorieDto): Promise<categorieDto | string> {
        return this.categorieRepo.createCategorie(categorie);
    }

    async updateCategorie(categorie: categorieDto): Promise<categorieDto | string> {
        return this.categorieRepo.updateCategorie(categorie);
    }

    async deleteCategorie(name: string): Promise<string> {
        return this.categorieRepo.deleteCategorie(name);
    }

    async getAllCategories(): Promise<categorieDto[] | string> {
        return this.categorieRepo.getAllCategories();
    }
}