import { faker } from '@faker-js/faker';
import type { categorieDto } from '../src/Application/dtos/categorie.js';
import type { CategorieRepoImpl } from '../src/Infrastructure/repositories/categorieRepoImpl.js';

export async function seedCategories(create: CategorieRepoImpl) {
  
  // Liste de noms réalistes pour ta marketplace
  const categoryNames = ['Électronique', 'Mode', 'Maison', 'Sport', 'Beauté', 'Livres'];

  const categories: categorieDto[] = categoryNames.map(name => ({
    name: name,
    description: faker.commerce.productDescription(),
    // Correction : Utilisation de faker.image.url() pour éviter le warning de dépréciation
    // Cette méthode est la plus stable dans les versions récentes de Faker
    image: faker.image.url({ 
      width: 800, 
      height: 600 
    })
  }));

  for (const cat of categories) {
    // Utilisation de createCategorie (orthographe alignée sur ton Repo)
    await create.createCategorie(cat);
  }

  console.log(`✅ ${categories.length} catégories créées avec succès.`);
  
  return categories; 
}