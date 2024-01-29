/*
  Warnings:

  - Added the required column `requirement` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "requirement" TEXT NOT NULL;
