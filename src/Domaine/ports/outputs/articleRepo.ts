import type { createArticleDto, updateAticleDto, articleDto } from "../../../Application/dtos/article.js"

export interface OArticleRepo {
    saveArticle(article: createArticleDto): Promise<articleDto | string>
    updateArticle(article: updateAticleDto): Promise<articleDto | string>
    deleteArticle(id: string): Promise<string>
    getArticleById(id: string): Promise<articleDto | string>
    getAllArticles(): Promise<articleDto[] | string>
}