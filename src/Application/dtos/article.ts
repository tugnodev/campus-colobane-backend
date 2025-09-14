export interface createArticleDto {
    userId: string;
    shopId: string;
    title: string;
    images: string[];
    category: string[];
    description: string;
    price: number;
    stock: number;
}

export interface updateAticleDto {
    id: string;
    userId?: string;
    shopId?: string;
    title?: string;
    images?: string[];
    category?: string[];
    description?: string;
    price?: number;
    stock?: number;
}

export interface articleDto {
    id: string;
    userId: string;
    shopId: string;
    title: string;
    images: string[];
    category: string[];
    description: string;
    price: number;
    stock: number;
}