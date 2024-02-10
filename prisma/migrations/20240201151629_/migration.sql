/*
  Warnings:

  - The `description` column on the `pets` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "pets" DROP COLUMN "description",
ADD COLUMN     "description" TEXT[];
