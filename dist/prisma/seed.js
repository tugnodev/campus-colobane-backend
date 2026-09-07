import { PrismaClient } from "./generated/prisma/index.js";
import { seedUsers } from "./user.seed.js";
import { seedArticles } from "./articles.seed.js";
import { seedInteractions } from "./interaction.seed.js";
import { seedOrders } from "./order.seed.js";
import { seedCategories } from "./categorie.seed.js";
// Import des Repositories
import { UserRepoImpl } from "../src/Infrastructure/repositories/userRepoImpl.js";
import { ArticleRepoImpl } from "../src/Infrastructure/repositories/articleRepoImpl.js";
import { CategorieRepoImpl } from "../src/Infrastructure/repositories/categorieRepoImpl.js";
import { OrderRepoImpl } from "../src/Infrastructure/repositories/orderRepoImpl.js";
import { CommentRepoImpl } from "../src/Infrastructure/repositories/commentRepoImpl.js";
import { NotesRepoImpl } from "../src/Infrastructure/repositories/notesRepoImpl.js";
// Dans prisma/seed.ts
const prisma = new PrismaClient();
async function main() {
    console.log("♻️  Nettoyage de la base de données...");
    // L'ordre est crucial : on supprime d'abord les enfants, puis les parents
    // On utilise les noms exacts générés par Prisma (souvent camelCase)
    const models = [
        "verification", // @@map("verification")
        "account", // @@map("account")
        "session", // @@map("session")
        "orders",
        "carts",
        "numbers",
        "messages",
        "room",
        "comments",
        "notes",
        "cateByArticle",
        "articles",
        "categories",
        "user", // @@map("user")
    ];
    for (const model of models) {
        if (prisma[model]) {
            await prisma[model].deleteMany();
            console.log(`   - ${model} nettoyé`);
        }
    }
    console.log("🌱 Début du seeding modulaire...");
    // 1. Initialisation des implémentations
    const userRepo = new UserRepoImpl();
    const articleRepo = new ArticleRepoImpl();
    const categoryRepo = new CategorieRepoImpl();
    const orderRepo = new OrderRepoImpl();
    const commentRepo = new CommentRepoImpl();
    const notesRepo = new NotesRepoImpl();
    // 2. Seed des Utilisateurs
    console.log("👥 Création des utilisateurs...");
    await seedUsers(userRepo, 100);
    const allUsers = await prisma.user.findMany();
    // 3. Seed des Catégories
    console.log("📂 Création des catégories...");
    await seedCategories(categoryRepo);
    // 4. Seed des Articles
    console.log("📦 Création des articles...");
    await seedArticles(articleRepo, allUsers);
    // Récupération et correction du type Articles (Tableau vs Nombre seul pour 'rates')
    const rawArticles = await articleRepo.getAllArticles();
    const allArticles = [];
    if (typeof rawArticles !== "string") {
        allArticles.push(...rawArticles);
    }
    // 5. Seed des Interactions (Commentaires & Notes)
    console.log("💬 Création des commentaires et notes...");
    await seedInteractions(commentRepo, notesRepo, allArticles, allUsers);
    // 6. Seed des Commandes
    console.log("🛒 Création des commandes...");
    await seedOrders(orderRepo, allUsers, allArticles);
    console.log("🏁 Seeding terminé avec succès !");
}
main()
    .catch((e) => {
    console.error("❌ Erreur pendant le seeding:", e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
