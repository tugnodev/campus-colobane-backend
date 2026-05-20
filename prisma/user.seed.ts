import type { createUserDto } from "../src/Application/dtos/user.js";
import type { UserRepoImpl } from "../src/Infrastructure/repositories/userRepoImpl.js";
import { faker } from "@faker-js/faker";
import { address } from "../src/Application/dtos/user.js";
import fs from "fs/promises";

export async function seedUsers(create: UserRepoImpl, count: number) {
  // On génère un tableau de "count" utilisateurs
  const users: createUserDto[] = Array.from({ length: count }).map(() => ({
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

  // sauvegarder dans un fichier .json
  //
  const usersJson = JSON.stringify(users, null, 2);
  await fs.writeFile("users.json", usersJson);
  console.log("✅ Utilisateurs sauvegardés dans users.json");

  console.log(`${count} utilisateurs ont été créés avec succès.`);
}
