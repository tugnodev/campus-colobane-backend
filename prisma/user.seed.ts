import { PrismaClient } from'../prisma/generated/index.js';
import { faker } from '@faker-js/faker';

export async function seedUsers(prisma: PrismaClient, count: number) {
  return Promise.all(
    Array.from({ length: count }).map(() =>
      prisma.user.create({
        data: {
          name: faker.person.fullName(),
          email: faker.internet.email().toLowerCase(),
          vendeur: faker.datatype.boolean(),
          address: faker.location.streetAddress(),
          image: faker.image.avatar(),
          Account: {
            create: {
              id: faker.string.uuid(),
              accountId: faker.string.alphanumeric(10),
              providerId: "google",
              createdAt: new Date(),
              updatedAt: new Date(),
            }
          }
        }
      })
    )
  );
}