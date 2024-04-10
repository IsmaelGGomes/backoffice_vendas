import { PrismaClient } from '@prisma/client'

export async function createCategoria(user) {
    let { email, first_name, last_name, password, is_admin } = user;
    if (!email || !first_name || !last_name || !password) {
        throw new Error('Campos obrigatorios não foram preenchidos')
    }

    const prisma = new PrismaClient()
    return await prisma.user.create({ data: { email, first_name, last_name, password, is_admin } });
}