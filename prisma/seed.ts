import { PrismaClient } from '../prisma/generated/index.js';
import { seedUsers } from '../prisma/user.seed.js';
import { seedArticles } from '../prisma/articles.seed.js';
import { seedInteractions } from'../prisma/interaction.seed.js';
import { seedOrders } from '../prisma/order.seed.js';

const prisma = new PrismaClient();

async function main() {
  console.log("♻️  Resetting database...");
  const tables = ['Verification', 'Session', 'Account', 'Orders', 'Carts', 'Messages', 'Comments', 'ArticleNotes', 'Articles', 'Numbers', 'User', 'Categories'];
  for (const table of tables) {
    await (prisma as any)[table.toLowerCase()].deleteMany();
  }

  console.log("🌱 Starting modular seeding...");

  const users = await seedUsers(prisma, 20);
  const vendeurs = users.filter(u => u.vendeur);
  
  await seedArticles(prisma, vendeurs);
  const articles = await prisma.articles.findMany();

  await seedInteractions(prisma, users, articles);
  await seedOrders(prisma, users, articles);

  console.log("🏁 Seeding complete!");
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());