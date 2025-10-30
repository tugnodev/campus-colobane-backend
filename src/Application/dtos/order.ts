import type { Articles } from "../../Domaine/entities/articles.js";

enum OrderStatus {
    ACCEPTED = 'accepted',
    SHIPPED = 'shipped',
    DELIVRED = 'delivred',
    CANCELLED = 'cancelled'
}

type article_details = {
    articleId : Articles;
    quantity: number;
}

export interface createOrderDto {
    article_details: article_details[];
    buyer_id: string;
    seller_id : string;
}

export interface updateOrderDto {
    id: string;
    article_details?: article_details[];
    buyer_id?: string;
    seller_id?: string;
    order_status?: OrderStatus;
}

export interface orderDto {
    id: string;
    article_details: article_details[];
    buyer_id: string;
    seller_id : string;
    order_status: OrderStatus | string;
    createdAt: Date;
    updatedAt: Date;
}