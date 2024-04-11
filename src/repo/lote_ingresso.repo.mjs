import { PrismaClient } from '@prisma/client'

export async function createLote(lote) {
    let { nome_lote, qtdMax, qtdMin } = lote;
    if (!nome_lote || !qtdMax || !qtdMin) {
        throw new Error('Campos obrigatorios não foram preenchidos')
    }

    const prisma = new PrismaClient()
    return await prisma.lotesIngresso.create({ data: { nome_lote, qtdMax, qtdMin } });
}

export async function getLote() {
    const prisma = new PrismaClient()
    return await prisma.lotesIngresso.findMany();
}