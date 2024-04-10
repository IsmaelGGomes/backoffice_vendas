-- CreateTable
CREATE TABLE "categoria_ingressos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "categoria_ingressos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lotes_ingressos" (
    "id" TEXT NOT NULL,
    "nome_lote" TEXT NOT NULL,
    "qtdMax" INTEGER NOT NULL,
    "qtdMin" INTEGER NOT NULL,

    CONSTRAINT "lotes_ingressos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingressos" (
    "id" TEXT NOT NULL,
    "qtd" TEXT NOT NULL,
    "lotesIngressoID" TEXT NOT NULL,
    "categoriaIngressoID" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "desconto" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ingressos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT,
    "numero" INTEGER,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ingressos" ADD CONSTRAINT "ingressos_lotesIngressoID_fkey" FOREIGN KEY ("lotesIngressoID") REFERENCES "lotes_ingressos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingressos" ADD CONSTRAINT "ingressos_categoriaIngressoID_fkey" FOREIGN KEY ("categoriaIngressoID") REFERENCES "categoria_ingressos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
