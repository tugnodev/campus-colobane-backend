type item = {
    articleId: string;
    quantity: number;
}

export interface createCardDto {
    card_details: item[];
    userId: string;
}

export interface updateCardDto {
    id: string;
    card_details?: item[];
    user_id?: string;
}

export interface cardDto {
    id: string;
    card_details: item[];
    user_id: string;
}
