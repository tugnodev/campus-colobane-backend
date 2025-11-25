-- AlterTable
ALTER TABLE "public"."Articles" ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "certified" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "public"."ArticleNotes" (
    "number" INTEGER NOT NULL,
    "seller_id" TEXT NOT NULL,
    "article_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ArticleNotes_number_key" ON "public"."ArticleNotes"("number");

-- AddForeignKey
ALTER TABLE "public"."ArticleNotes" ADD CONSTRAINT "ArticleNotes_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ArticleNotes" ADD CONSTRAINT "ArticleNotes_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "public"."Articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
