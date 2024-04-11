/*
  Warnings:

  - Added the required column `eventoId` to the `ingressos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ingressos" ADD COLUMN     "eventoId" TEXT NOT NULL,
ALTER COLUMN "desconto" DROP NOT NULL;

-- CreateTable
CREATE TABLE "vendas" (
    "id" TEXT NOT NULL,
    "qtd" TEXT NOT NULL,
    "ingressoID" TEXT NOT NULL,

    CONSTRAINT "vendas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ingressos" ADD CONSTRAINT "ingressos_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendas" ADD CONSTRAINT "vendas_ingressoID_fkey" FOREIGN KEY ("ingressoID") REFERENCES "ingressos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
