import { PrismaClient } from '@prisma/client'

export async function createEvento(lote) {
    let { nome, data, local, descricao } = lote;
    if (!nome || !data || !local || !descricao) {
        throw new Error('Campos obrigatorios não foram preenchidos')
    }

    const prisma = new PrismaClient()
    return await prisma.evento.create({ data: { nome, data, local, descricao } });
}

export async function getEvento() {
    const prisma = new PrismaClient()
    return await prisma.evento.findMany();
}