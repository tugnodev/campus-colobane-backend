import { type User } from '../src/Domaine/entities/user.js';
import type { ArticleRepoImpl } from '../src/Infrastructure/repositories/articleRepoImpl.js';
import type { createArticleDto } from '../src/Application/dtos/article.js';
import { faker } from '@faker-js/faker';

export async function seedArticles(create: ArticleRepoImpl, vendeurs: User[]) {
  
  const articleCount = 100;

  for (let i = 0; i < articleCount; i++) {
    const randomVendeur = faker.helpers.arrayElement(vendeurs);

    const articleData: createArticleDto = {
      userId: randomVendeur.id,
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      // Utilisation de number.float pour correspondre au type 'number' du DTO
      price: faker.number.float({ min: 5, max: 1000, fractionDigits: 2 }),
      stock: faker.number.int({ min: 0, max: 50 }),
      
      // CORRECTION : On passe l'objet d'options directement
      images: [
        faker.image.urlLoremFlickr({ 
          category: 'technics', 
          width: 640, 
          height: 480 
        })
      ],

      category: faker.helpers.arrayElements(
        ['Tech', 'Art', 'Fashion', 'Home'], 
        { min: 1, max: 2 }
      ),
    };

    await create.saveArticle(articleData);
  }

  console.log(`✅ Articles générés sans avertissements.`);
}