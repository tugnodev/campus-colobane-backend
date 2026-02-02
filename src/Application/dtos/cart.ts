export type item = {
  articleId: string;
  quantity: number;
};

export interface createCartDto {
  cart: item[];
  userId: string;
}

export interface updateCartDto {
  id: string;
  cart: item[];
  userId: string;
}

export interface cartDto {
  id: string;
  cart: item[];
  userId: string;
}

export interface linkToArticleDto {
  name: string;
  articleId: string;
}
