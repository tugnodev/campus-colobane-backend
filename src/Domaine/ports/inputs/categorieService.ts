import type { categorieDto } from "../../../Application/dtos/categorie.js"

export interface ICategorieService {
    createCategorie(categorie: categorieDto): Promise<categorieDto | string>;
    updateCategorie(categorie: categorieDto): Promise<categorieDto | string>;
    deleteCategorie(name: string): Promise<string>;
    getAllCategories(): Promise<categorieDto[] | string>;
}