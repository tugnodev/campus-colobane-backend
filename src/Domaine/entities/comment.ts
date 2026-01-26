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

import { PrismaClient } from "../../../prisma/generated/index.js";

const prisma = new PrismaClient();

export const createComment = async (comment: Comment) => {
  const newComment = await prisma.articleRates.create({
    data: comment,
  });
  return newComment;
};

export const createRate = async (rate: Rate) => {
  const newRate = await prisma.rate.create({
    data: rate,
  });
  return newRate;
};
