/*
  Warnings:

  - You are about to drop the column `categoriesName` on the `Articles` table. All the data in the column will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Articles" DROP CONSTRAINT "Articles_categoriesName_fkey";

-- DropForeignKey
ALTER TABLE "CateByArticle" DROP CONSTRAINT "CateByArticle_categoryId_fkey";

-- AlterTable
ALTER TABLE "Articles" DROP COLUMN "categoriesName";

-- DropTable
DROP TABLE "category";

-- CreateTable
CREATE TABLE "Categories" (
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("name")
);

-- AddForeignKey
ALTER TABLE "CateByArticle" ADD CONSTRAINT "CateByArticle_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
