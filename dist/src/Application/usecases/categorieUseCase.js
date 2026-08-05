export class CategorieUseCase {
    categorieRepo;
    constructor(categorieRepo) {
        this.categorieRepo = categorieRepo;
    }
    async createCategorie(categorieData) {
        return this.categorieRepo.createCategorie(categorieData);
    }
    async updateCategorie(categorieData) {
        return this.categorieRepo.updateCategorie(categorieData);
    }
    async deleteCategorie(name) {
        await this.categorieRepo.deleteCategorie(name);
        return `Categorie with name ${name} has been deleted successfully.`;
    }
    async getAllCategories() {
        return this.categorieRepo.getAllCategories();
    }
    async linkToArticle(data) {
        return this.categorieRepo.linkToArticle(data);
    }
    async unLinkToArticle(data) {
        return this.categorieRepo.unLinkToArticle(data);
    }
}
