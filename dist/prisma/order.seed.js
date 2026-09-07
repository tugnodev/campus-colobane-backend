import {} from "../src/Domaine/entities/user.js";
import { faker } from '@faker-js/faker';
export async function seedOrders(create, users, articles) {
    // On crée une commande pour chaque utilisateur (en tant qu'acheteur)
    for (const user of users) {
        // 1. On sélectionne un vendeur au hasard (différent de l'acheteur si possible)
        const seller = faker.helpers.arrayElement(users.filter(u => u.id !== user.id)) || users[0];
        // 2. On génère entre 1 et 3 articles pour cette commande
        const selectedArticles = faker.helpers.arrayElements(articles, { min: 1, max: 3 });
        // 3. On construit l'objet articleDetails
        const articleDetails = selectedArticles.map(art => ({
            articleId: art, // Ici on passe l'entité Article complète comme demandé par ton type
            quantity: faker.number.int({ min: 1, max: 5 })
        }));
        // 4. On respecte strictement ton interface createOrderDto
        const orderData = {
            articleDetails: articleDetails,
            buyerId: user.id, // L'utilisateur actuel est l'acheteur
            sellerId: seller.id // Un autre utilisateur est le vendeur
        };
        await create.saveOrder(orderData);
    }
    console.log(`✅ Seed terminé : Des commandes ont été créées pour ${users.length} acheteurs.`);
}
