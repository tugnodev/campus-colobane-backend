type item = {
    articleId: string;
    quantity: number;
}

export interface createCartDto {
    card_details: item[];
    userId: string;
}

export interface updateCartDto {
    id: string;
    card_details?: item[];
    user_id?: string;
}

export interface cartDto {
    id: string;
    card_details: item[];
    user_id: string;
}
