export interface createArticleDto {
    userId: string;
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
    title: string;
    images: string[];
    category: string[];
    description: string;
    price: number;
    stock: number;
    views: number;
    createdAt: Date;
    updatedAt: Date;
}