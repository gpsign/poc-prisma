/*
  Warnings:

  - Added the required column `favoriteMovie` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "favoriteMovie" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_favoriteMovie_fkey" FOREIGN KEY ("favoriteMovie") REFERENCES "movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
