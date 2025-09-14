import type { ICategorieService } from '../../Domaine/ports/inputs/categorieService.js';
import type { categorieDto } from '../dtos/categorie.js';

export class CategorieUseCase {
    private categorieService: ICategorieService;

    constructor(categorieService: ICategorieService) {
        this.categorieService = categorieService;
    }

    async create(categorieData: categorieDto): Promise<categorieDto | string> {
        return this.categorieService.createCategorie(categorieData);
    }

    async update(categorieData: categorieDto): Promise<categorieDto | string> {
        return this.categorieService.updateCategorie(categorieData);
    }

    async delete(name: string): Promise<string> {
        await this.categorieService.deleteCategorie(name);
        return `Categorie with name ${name} has been deleted successfully.`;
    }

    async getAll(): Promise<categorieDto[] | string> {
        return this.categorieService.getAllCategories();
    }
}
