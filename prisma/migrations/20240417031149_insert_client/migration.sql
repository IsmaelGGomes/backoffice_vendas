/*
  Warnings:

  - Added the required column `clientId` to the `ingressos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ingressos" ADD COLUMN     "clientId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ingressos" ADD CONSTRAINT "ingressos_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
