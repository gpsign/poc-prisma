/*
  Warnings:

  - You are about to drop the column `favoriteMovie` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[movieRented]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_favoriteMovie_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "favoriteMovie",
ADD COLUMN     "movieRented" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "user_movieRented_key" ON "user"("movieRented");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_movieRented_fkey" FOREIGN KEY ("movieRented") REFERENCES "movie"("id") ON DELETE SET NULL ON UPDATE CASCADE;
