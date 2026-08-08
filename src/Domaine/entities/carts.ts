export type Item = {
  articleId: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
};

export type Carts = {
  id: string;
  userId: string;
  items: Item[];
};
