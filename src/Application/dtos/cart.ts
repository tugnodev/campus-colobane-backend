type item = {
    articleId: string;
    quantity: number;
}

export interface createCartDto {
    cart: item[];
    user_id: string;
}

export interface updateCartDto {
    id: string;
    cart: item[];
    user_id: string;
}

export interface cartDto {
    id: string;
    cart: item[];
    user_id: string;
}
