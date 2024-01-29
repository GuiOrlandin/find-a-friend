/*
  Warnings:

  - Added the required column `enviroment` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Enviroment" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "enviroment" "Enviroment" NOT NULL;
