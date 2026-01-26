export type Comment = {
  id: Promise<string>;
  comment: string;
  article_id: string;
  buyer_id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Rate = {
  id: Promise<string>;
  rate: number;
  article_id: string;
  buyer_id: string;
  createdAt: Date;
  updatedAt: Date;
};
