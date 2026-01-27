import { PrismaClient} from'../prisma/generated/index.js';
import { faker } from '@faker-js/faker';
import { type User } from '../src/Domaine/entities/user.js';

export async function seedArticles(prisma: PrismaClient, vendeurs: User[], ) {
  const categories = ['Électronique', 'Mode', 'Maison', 'Sport'];
  // Création des catégories d'abord
  for (const name of categories) {
    await prisma.categories.create({
        data:{
            name : name,
            description: faker.lorem.sentence(),
            image : faker.image.url({width: 640, height: 480})

        }
    });
  }

  for (const vendeur of vendeurs) {
    await prisma.articles.create({
      data: {
        userId: vendeur.id,
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price({ min: 10, max: 1000 })),
        stock: faker.number.int({ min: 1, max: 50 }),
        images: [faker.image.url(), faker.image.url()],
        category: [faker.helpers.arrayElement(categories)],
      }
    });
  }
}