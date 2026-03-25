import { type User } from "../src/Domaine/entities/user.js";
import type { Articles } from "../src/Domaine/entities/articles.js";
import type { createCartDto, item } from "../src/Application/dtos/cart.js";
import type { CartRepoImpl } from "../src/Infrastructure/repositories/cartRepoImpl.js";
import { faker } from "@faker-js/faker";

export async function seedCarts(
  create: CartRepoImpl,
  users: User[],
  articles: Articles[],
) {
  for (const user of users) {
    // 1. On décide combien d'articles cet utilisateur a dans son panier (ex: 1 à 4)
    const numberOfItems = faker.number.int({ min: 1, max: 4 });

    // 2. On sélectionne des articles aléatoires
    const selectedArticles = faker.helpers.arrayElements(
      articles,
      numberOfItems,
    );

    // 3. On construit le tableau d'items
    const cartItems: item[] = selectedArticles.map((art) => ({
      articleId: art.id, // On utilise l'ID de l'article
      quantity: faker.number.int({ min: 1, max: 3 }),
      name: art.title,
      price: art.price,
      image: art.images[0],
    }));

    // 4. On respecte ton interface createCartDto
    const cartData: createCartDto = {
      userId: user.id,
      cart: cartItems,
    };

    // 5. Sauvegarde via le repo
    await create.createCart(cartData);
  }

  console.log(`✅ Paniers générés pour ${users.length} utilisateurs.`);
}
