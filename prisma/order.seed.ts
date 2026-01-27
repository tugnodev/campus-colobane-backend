import { PrismaClient } from '../prisma/generated/index.js';
import { faker } from '@faker-js/faker';
import { type User } from '../src/Domaine/entities/user.js';
import { type Articles } from '../src/Domaine/entities/articles.js';
import { type Carts } from '../src/Domaine/entities/carts.js';

export async function seedOrders(prisma: PrismaClient, users: User[], articles: Articles[]) {
  for (const user of users) {
    const article = faker.helpers.arrayElement(articles);
    
    // Panier (Carts)
    await prisma.carts.create({
      data: {
        user_id: user.id,
        cart: { items: [{ id: article.id, user_id: user.id, card_details: article }] } as unknown as Carts
      }
    });

    // Commande (Orders)
    if (faker.datatype.boolean()) {
      await prisma.orders.create({
        data: {
          buyer_id: user.id,
          seller_id: article.userId,
          order_status: "accepted",
          article_details: { title: article.title, price: article.price } as  Articles,
        }
      });
    }
  }
}