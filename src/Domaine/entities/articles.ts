export type Articles = {
  id: Promise<string>;
  userId: string;
  title: string;
  images: string[];
  category: string[];
  description: string;
  price: number;
  stock: number;
  rates: number;
  createdAt: Date;
  updatedAt: Date;
};
