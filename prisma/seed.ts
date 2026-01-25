import { PrismaClient } from '../src/generated/prisma';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Nettoyage de la base de données ---');
  await prisma.comments.deleteMany();
  await prisma.articles.deleteMany();
  await prisma.categories.deleteMany();
  await prisma.user.deleteMany();

  // 1. Créer 5 Catégories
  const categoryNames = ['Électronique', 'Mode', 'Maison', 'Sport', 'Beauté'];
  for (const name of categoryNames) {
    await prisma.categories.create({
      data: {
        name,
        description: faker.commerce.productAdjective(),
        image: faker.image.urlLoremFlickr({ category: 'business' })
      }
    });
  }

  // 2. Créer 10 Vendeurs
  const sellers = [];
  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        vendeur: true,
        address: faker.location.streetAddress(),
        certified: faker.datatype.boolean(),
      }
    });
    sellers.push(user);
  }

  // 3. Créer 20 Clients
  const clients = [];
  for (let i = 0; i < 20; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        vendeur: false,
        address: faker.location.streetAddress(),
      }
    });
    clients.push(user);
  }

  // 4. Créer 100 Articles (répartis entre les vendeurs)
  const articles = [];
  for (let i = 0; i < 100; i++) {
    const randomSeller = sellers[Math.floor(Math.random() * sellers.length)];
    const randomCat = categoryNames[Math.floor(Math.random() * categoryNames.length)];
    
    const article = await prisma.articles.create({
      data: {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price({ min: 10, max: 1000 })),
        stock: faker.number.int({ min: 1, max: 50 }),
        images: [faker.image.url(), faker.image.url()],
        category: [randomCat],
        user_id: randomSeller.id,
      }
    });
    articles.push(article);
  }

  // 5. Créer des Commentaires (2 par article en moyenne)
  for (const article of articles) {
    const randomClient = clients[Math.floor(Math.random() * clients.length)];
    await prisma.comments.create({
      data: {
        comment: faker.lorem.sentence(),
        article_id: article.id,
        buyer_id: randomClient.id,
      }
    });
  }

  console.log('✅ Base de données peuplée avec succès !');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  
  
  