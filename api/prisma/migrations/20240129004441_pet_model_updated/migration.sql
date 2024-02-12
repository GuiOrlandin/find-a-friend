/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `pets` table. All the data in the column will be lost.
  - Added the required column `age` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `animalSize` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energyLevel` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `levelOfIndependence` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Age" AS ENUM ('FILHOTE', 'ADULTO');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('PEQUENINO', 'MEDIO', 'GRANDE');

-- CreateEnum
CREATE TYPE "Independence" AS ENUM ('BAIXO', 'MEDIO', 'ALTO');

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "updatedAt",
ADD COLUMN     "age" "Age" NOT NULL,
ADD COLUMN     "animalSize" "Size" NOT NULL,
ADD COLUMN     "energyLevel" TEXT NOT NULL,
ADD COLUMN     "levelOfIndependence" "Independence" NOT NULL;
