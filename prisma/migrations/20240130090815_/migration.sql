/*
  Warnings:

  - The values [PEQUENINO] on the enum `Size` will be removed. If these variants are still used in the database, this will fail.
  - Changed the type of `enviroment` on the `pets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Size_new" AS ENUM ('PEQUENO', 'MEDIO', 'GRANDE');
ALTER TABLE "pets" ALTER COLUMN "animalSize" TYPE "Size_new" USING ("animalSize"::text::"Size_new");
ALTER TABLE "pets" ALTER COLUMN "enviroment" TYPE "Size_new" USING ("enviroment"::text::"Size_new");
ALTER TYPE "Size" RENAME TO "Size_old";
ALTER TYPE "Size_new" RENAME TO "Size";
DROP TYPE "Size_old";
COMMIT;

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "enviroment",
ADD COLUMN     "enviroment" "Size" NOT NULL;

-- DropEnum
DROP TYPE "Enviroment";
