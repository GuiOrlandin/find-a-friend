/*
  Warnings:

  - You are about to drop the column `url` on the `pet_images` table. All the data in the column will be lost.
  - Added the required column `path` to the `pet_images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pet_images" DROP COLUMN "url",
ADD COLUMN     "path" TEXT NOT NULL;
