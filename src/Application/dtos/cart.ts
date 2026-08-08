export type Item = {

  articleId: string;
  quantity: number;
};

export interface createCartDto {
  userId: string;
}

export interface updateCartDto {
  id: string;
  item: Item;
  userId: string;
}

export interface deleteCartDto {
  cartId: string;
  articleId: string;
}

export interface addToCartDto {
  cartId: string;
  articleId: string;
  quantity: number;
  userId: string;
}
