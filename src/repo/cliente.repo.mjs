import { PrismaClient } from '@prisma/client'

export async function createCliente(cliente) {
    let { nome, email, cpf, numero } = cliente;
    if (!nome || !email || !cpf || !numero) {
        throw new Error('Campos obrigatorios não foram preenchidos')
    }

    const prisma = new PrismaClient()
    return await prisma.cliente.create({ data: { nome, email, cpf, numero } });
}

export async function getCliente() {
    const prisma = new PrismaClient()
    return await prisma.cliente.findMany();
}