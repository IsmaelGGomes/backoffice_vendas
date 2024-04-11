/*
  Warnings:

  - Changed the type of `qtd` on the `ingressos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ingressos" DROP COLUMN "qtd",
ADD COLUMN     "qtd" INTEGER NOT NULL;
