export class CategorieService {
    categorieRepo;
    constructor(categorieRepo) {
        this.categorieRepo = categorieRepo;
    }
    async createCategorie(categorie) {
        return this.categorieRepo.createCategorie(categorie);
    }
    async updateCategorie(categorie) {
        return this.categorieRepo.updateCategorie(categorie);
    }
    async deleteCategorie(name) {
        return this.categorieRepo.deleteCategorie(name);
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
