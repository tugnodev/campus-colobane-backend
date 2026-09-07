import { faker } from "@faker-js/faker";
import { address } from "../src/Application/dtos/user.js";
export async function seedUsers(create, count) {
    // On génère un tableau de "count" utilisateurs
    const users = Array.from({ length: count }).map(() => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        password: faker.internet.password({ length: 10 }), // Mot de passe aléatoire sécurisé
        address: address.UADB, // On garde ton enum/objet fixe comme demandé
    }));
    // On boucle sur le tableau généré pour les insérer en base
    for (const us of users) {
        await create.createUser(us);
    }
    console.log(JSON.stringify(users));
    console.log(`${count} utilisateurs ont été créés avec succès.`);
}
