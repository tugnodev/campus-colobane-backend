import { faker } from "@faker-js/faker";
export async function seedCategories(create) {
    // Liste de noms réalistes pour ta marketplace
    const categoryNames = [
        "Informatique",
        "Mode & Cosmétique",
        "Maison & Électronique",
        "Sport",
        "Supermarché",
        "Education",
        "Jeux Vidéo & Console",
    ];
    const categories = categoryNames.map((name) => ({
        name: name,
        description: faker.commerce.productDescription(),
        image: faker.image.url({
            width: 500,
            height: 500,
        }),
    }));
    for (const cat of categories) {
        await create.createCategorie(cat);
    }
    console.log(`✅ ${categories.length} catégories créées avec succès.`);
    return categories;
}
