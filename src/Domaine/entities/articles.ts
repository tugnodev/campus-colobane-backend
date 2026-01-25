export type Articles = {
  id: string;
  title: string;
  images: string[];
  category: string[];
  description: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
  views: number;
  user_id: string;
};
