import { type User } from "../src/Domaine/entities/user.js";
import type { ArticleRepoImpl } from "../src/Infrastructure/repositories/articleRepoImpl.js";
import type { createArticleDto } from "../src/Application/dtos/article.js";
import { faker } from "@faker-js/faker";

export async function seedArticles(create: ArticleRepoImpl, vendeurs: User[]) {
  const articleCount = 100;
  const categoryNames = [
    "Informatique",
    "Mode & Cosmétique",
    "Maison & Électronique",
    "Sport",
    "Supermarché",
    "Education",
    "Jeux Vidéo & Console",
  ];

  for (let i = 0; i < articleCount; i++) {
    const randomVendeur = faker.helpers.arrayElement(vendeurs);

    const articleData: createArticleDto = {
      userId: randomVendeur.id,
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.number.float({ min: 1000, max: 100000 }),
      stock: faker.number.int({ min: 0, max: 50 }),
      images: ["1", "2", "3", "4", "5"].map(() => faker.image.url()),
      category: faker.helpers.arrayElements(categoryNames, { min: 1, max: 1 }),
    };
    await create.saveArticle(articleData);
  }

  console.log(`✅ Articles générés sans avertissements.`);
}
