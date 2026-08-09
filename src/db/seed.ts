/**
 * Script de seed — génère des fausses données via Faker en passant
 * exclusivement par tes repos (ArticleRepoImpl, UserRepoImpl, etc.),
 * pas par des requêtes Drizzle directes.
 *
 * Usage :
 *   pnpm db:seed
 *
 * (ajoute dans package.json : "db:seed": "tsx --env-file=.env src/db/seed.ts")
 *
 * Notes importantes :
 * - Les users sont créés via UserRepoImpl.createUser, qui passe par
 *   better-auth (auth.api.signUpEmail). Ils ont donc un vrai mot de passe
 *   hashé et sont utilisables pour se connecter (voir TEST_PASSWORD).
 * - Comme better-auth fait du hashing à chaque création, ça prend
 *   quelques secondes par user — le nombre par défaut est volontairement
 *   modéré (voir NB_USERS).
 * - Aucun repo n'expose de "delete all" / "get all" pour toutes les
 *   entités (carts, notes, messages, etc.), donc ce script ne vide pas
 *   la base avant de seed. Lance-le sur une base vide, ou truncate
 *   manuellement au préalable si besoin.
 */

import { fakerFR as faker } from "@faker-js/faker";
import { sql } from "drizzle-orm";
import { db } from "./index.js";

import { ArticleRepoImpl } from "../Infrastructure/repositories/articleRepoImpl.js";
import { CartRepoImpl } from "../Infrastructure/repositories/cartRepoImpl.js";
import { CategorieRepoImpl } from "../Infrastructure/repositories/categorieRepoImpl.js";
import { CommentRepoImpl } from "../Infrastructure/repositories/commentRepoImpl.js";
import { MessageRepoImpl } from "../Infrastructure/repositories/messageRepoImpl.js";
import { NotesRepoImpl } from "../Infrastructure/repositories/notesRepoImpl.js";
import { OrderRepoImpl } from "../Infrastructure/repositories/orderRepoImpl.js";
import { RoomRepositoryImpl } from "../Infrastructure/repositories/roomRepoImpl.js";
import { UserRepoImpl } from "../Infrastructure/repositories/userRepoImpl.js";

import { OrderStatus } from "../Domaine/entities/orders.js";
import { address } from "../Application/dtos/user.js";

// ---------- Réglages ----------
const NB_USERS = 15;
const NB_VENDEURS_RATIO = 0.4;
const NB_ARTICLES_PAR_VENDEUR = [2, 6] as const;
const NB_ROOMS = 10;
const NB_MESSAGES_PAR_ROOM = [1, 6] as const;
const NB_ORDERS = 12;
const TEST_PASSWORD = "Password123!";

const CATEGORIES = [
  { name: "Électronique", description: "Téléphones, ordinateurs, accessoires" },
  { name: "Livres & Cours", description: "Manuels, notes de cours, fascicules" },
  { name: "Vêtements", description: "Habits, chaussures, accessoires de mode" },
  { name: "Meubles", description: "Mobilier pour chambre et bureau" },
  { name: "Sport & Loisirs", description: "Équipements sportifs et loisirs" },
  { name: "Beauté & Santé", description: "Cosmétiques et produits de santé" },
  { name: "Alimentation", description: "Produits alimentaires et boissons" },
  { name: "Divers", description: "Tout le reste" },
];

const articleRepo = new ArticleRepoImpl();
const cartRepo = new CartRepoImpl();
const categorieRepo = new CategorieRepoImpl();
const commentRepo = new CommentRepoImpl();
const messageRepo = new MessageRepoImpl();
const notesRepo = new NotesRepoImpl();
const orderRepo = new OrderRepoImpl();
const roomRepo = new RoomRepositoryImpl();
const userRepo = new UserRepoImpl();

// ---------- Helpers ----------
const randInt = (min: number, max: number) => faker.number.int({ min, max });

const pickSome = <T>(arr: T[], max: number): T[] => {
  const count = randInt(0, Math.min(max, arr.length));
  return faker.helpers.arrayElements(arr, count);
};

const isError = (result: unknown): result is string => typeof result === "string";

// ---------- Nettoyage ----------
// Aucun repo n'expose de suppression en masse pour toutes les entités
// (carts, notes, messages...), donc ce seul bloc passe par un TRUNCATE
// direct plutôt que par les repos.
async function cleanDatabase() {
  console.log("🧹 Nettoyage de la base avant seed...");
  await db.execute(sql`
    TRUNCATE TABLE
      "OrderItems", "Orders",
      "Messages", "Room",
      "CartItems", "Carts",
      "Numbers",
      "Comments", "Notes",
      "CateByArticle", "Articles",
      "Categories",
      "session", "account", "verification",
      "user"
    RESTART IDENTITY CASCADE;
  `);
}

// ---------- Étapes ----------
async function seedCategories() {
  console.log(`🏷️  Création de ${CATEGORIES.length} catégories...`);
  const created: { name: string }[] = [];

  for (const c of CATEGORIES) {
    const result = await categorieRepo.createCategorie({
      name: c.name,
      description: c.description,
      image: faker.image.urlPicsumPhotos({ width: 400, height: 300 }),
    });

    if (isError(result)) {
      console.warn(`   ⚠️ Catégorie "${c.name}" ignorée : ${result}`);
      continue;
    }
    created.push(result);
  }

  return created;
}

async function seedUsers() {
  console.log(`👤 Création de ${NB_USERS} utilisateurs (via better-auth)...`);
  const created: { id: string }[] = [];

  for (let i = 0; i < NB_USERS; i++) {
    const result = await userRepo.createUser({
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      password: TEST_PASSWORD,
      image: faker.image.avatar(),
      address: address.UADB,
      rememberMe: false,
    });

    if (isError(result)) {
      console.warn(`   ⚠️ User ignoré : ${result}`);
      continue;
    }
    created.push({ id: result.user!.id });
  }

  return created;
}

async function turnSomeIntoVendors(users: { id: string }[]) {
  const nbVendeurs = Math.max(1, Math.round(users.length * NB_VENDEURS_RATIO));
  const chosen = faker.helpers.arrayElements(users, nbVendeurs);

  console.log(`🏪 Passage de ${chosen.length} users en vendeurs...`);

  const usedPhones = new Set<number>();
  const vendeurs: { id: string }[] = [];

  for (const u of chosen) {
    let phone: number;
    do {
      phone = randInt(100000, 999999);
    } while (usedPhones.has(phone));
    usedPhones.add(phone);

    const result = await userRepo.turnToVendor({
      id: u.id,
      phone,
      address: address.UCAD,
    });

    if (isError(result)) {
      console.warn(`   ⚠️ Passage vendeur ignoré pour ${u.id} : ${result}`);
      continue;
    }
    vendeurs.push({ id: result.id });
  }

  return vendeurs;
}

async function seedArticles(
  vendeurs: { id: string }[],
  categoriesList: { name: string }[],
) {
  console.log("📦 Création des articles...");
  const created: { id: string }[] = [];

  for (const vendeur of vendeurs) {
    const nbArticles = randInt(...NB_ARTICLES_PAR_VENDEUR);

    for (let i = 0; i < nbArticles; i++) {
      const chosenCategories = pickSome(categoriesList, 3).map((c) => c.name);

      const result = await articleRepo.saveArticle({
        userId: vendeur.id,
        title: faker.commerce.productName(),
        images: Array.from({ length: randInt(1, 4) }).map(() =>
          faker.image.urlPicsumPhotos({ width: 600, height: 600 }),
        ),
        description: faker.commerce.productDescription(),
        price: Number(faker.commerce.price({ min: 500, max: 150000, dec: 0 })),
        stock: randInt(0, 50),
        category: chosenCategories.length
          ? chosenCategories
          : [categoriesList[0].name],
      });

      if (isError(result)) {
        console.warn(`   ⚠️ Article ignoré : ${result}`);
        continue;
      }
      created.push({ id: result.id });
    }
  }

  return created;
}

async function seedNotesAndComments(
  articlesList: { id: string }[],
  usersList: { id: string }[],
) {
  console.log("⭐ Création des notes et commentaires...");

  for (const article of articlesList) {
    const noters = pickSome(usersList, 6);
    for (const noter of noters) {
      const result = await notesRepo.createNote({
        number: randInt(1, 5),
        userId: noter.id,
        articleId: article.id,
      });
      if (isError(result)) {
        // "Note already exists" est attendu si le même user est tiré deux fois
        continue;
      }
    }

    const commenters = pickSome(usersList, 4);
    for (const commenter of commenters) {
      await commentRepo.saveComment({
        articleId: article.id,
        userId: commenter.id,
        comment: faker.lorem.sentence(),
      });
    }
  }
}

async function seedCartsAndItems(
  usersList: { id: string }[],
  articlesList: { id: string }[],
) {
  console.log("🛒 Création des paniers...");

  for (const u of usersList) {
    const cartResult = await cartRepo.getByUserId(u.id);
    if (typeof cartResult === "string") {
      console.warn(`   ⚠️ Panier ignoré pour ${u.id} : ${cartResult}`);
      continue;
    }

    const nbItems = randInt(0, 5);
    const chosenArticles = faker.helpers.arrayElements(articlesList, nbItems);

    for (const article of chosenArticles) {
      await cartRepo.addToCart({
        cartId: cartResult.id,
        userId: u.id,
        articleId: article.id,
        quantity: randInt(1, 3),
      });
    }
  }
}

async function seedOrders(
  usersList: { id: string }[],
  vendeurs: { id: string }[],
  articlesList: { id: string }[],
) {
  console.log("📑 Création des commandes...");

  const finalStatuses = [OrderStatus.VALIDEE, OrderStatus.ANNULEE];

  for (let i = 0; i < NB_ORDERS; i++) {
    const buyer = faker.helpers.arrayElement(usersList);
    let seller = faker.helpers.arrayElement(vendeurs);
    while (seller.id === buyer.id) {
      seller = faker.helpers.arrayElement(vendeurs);
    }

    const chosenArticles = faker.helpers.arrayElements(
      articlesList,
      randInt(1, 4),
    );
    if (chosenArticles.length === 0) continue;

    const result = await orderRepo.saveOrder({
      buyerId: buyer.id,
      sellerId: seller.id,
      items: chosenArticles.map((a) => ({
        articleId: a.id,
        quantity: randInt(1, 3),
      })),
    });

    if (isError(result)) {
      console.warn(`   ⚠️ Commande ignorée : ${result}`);
      continue;
    }

    // Fait évoluer le statut de certaines commandes pour varier les données
    if (faker.datatype.boolean({ probability: 0.6 })) {
      await orderRepo.updateOrder({
        id: result.id,
        status: faker.helpers.arrayElement(finalStatuses),
      });
    }
  }
}

async function main() {
  await cleanDatabase();

  const categoriesList = await seedCategories();
  const users = await seedUsers();

  if (users.length === 0) {
    throw new Error("Aucun utilisateur créé, vérifie la config better-auth");
  }

  const vendeurs = await turnSomeIntoVendors(users);
  if (vendeurs.length === 0) {
    throw new Error("Aucun vendeur créé, augmente NB_VENDEURS_RATIO");
  }

  const articlesList = await seedArticles(vendeurs, categoriesList);

  await seedNotesAndComments(articlesList, users);
  await seedCartsAndItems(users, articlesList);
  await seedOrders(users, vendeurs, articlesList);

  console.log("✅ Seed terminé avec succès !");
  console.log(
    `   ${users.length} users (${vendeurs.length} vendeurs), ${categoriesList.length} catégories, ${articlesList.length} articles`,
  );
  console.log(`   Mot de passe de test pour tous les users : ${TEST_PASSWORD}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Erreur pendant le seed :", error);
    process.exit(1);
  });
