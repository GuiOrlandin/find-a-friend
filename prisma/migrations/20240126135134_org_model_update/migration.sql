/*
  Warnings:

  - Made the column `CEP` on table `orgs` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "orgs" ALTER COLUMN "CEP" SET NOT NULL;
