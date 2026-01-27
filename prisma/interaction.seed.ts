import { PrismaClient } from '../prisma/generated/index.js';
import { faker } from '@faker-js/faker';
import { type User } from '../src/Domaine/entities/user.js';
import { type Articles } from '../src/Domaine/entities/articles.js';

export async function seedInteractions(prisma: PrismaClient, users: User[], articles: Articles[]) {
  for (const article of articles) {
    const buyer = faker.helpers.arrayElement(users.filter(u => u.id !== article.userId));
    
    // Commentaire
    await prisma.comments.create({
      data: {
        article_id: article.id,
        buyer_id: buyer.id,
        comment: faker.lorem.sentence(),
      }
    });

    // Message
    await prisma.messages.create({
      data: {
        message: faker.lorem.sentence(),
        sender_id: buyer.id,
        receiver_id: article.userId,
        article_id: article.id,
      }
    });
  }
}