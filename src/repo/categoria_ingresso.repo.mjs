import { PrismaClient } from '@prisma/client'

export async function createCategoria(categoria) {
    let { nome } = categoria;
    if (!nome ) {
        throw new Error('Campos obrigatorios não foram preenchidos')
    }

    const prisma = new PrismaClient()
    return await prisma.categoriaIngresso.create({ data: { nome } });
}

export async function getCategoria() {
    const prisma = new PrismaClient()
    return await prisma.categoriaIngresso.findMany();
}