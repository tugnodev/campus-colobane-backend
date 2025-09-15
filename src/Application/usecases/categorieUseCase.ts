import type { OCategorieRepo } from '../../Domaine/ports/outputs/categorieRepo.js';
import type { categorieDto } from '../dtos/categorie.js';

export class CategorieUseCase {
    private categorieRepo: OCategorieRepo;

    constructor(categorieRepo: OCategorieRepo) {
        this.categorieRepo = categorieRepo;
    }

    async create(categorieData: categorieDto): Promise<categorieDto | string> {
        return this.categorieRepo.createCategorie(categorieData);
    }

    async update(categorieData: categorieDto): Promise<categorieDto | string> {
        return this.categorieRepo.updateCategorie(categorieData);
    }

    async delete(name: string): Promise<string> {
        await this.categorieRepo.deleteCategorie(name);
        return `Categorie with name ${name} has been deleted successfully.`;
    }

    async getAll(): Promise<categorieDto[] | string> {
        return this.categorieRepo.getAllCategories();
    }
}
